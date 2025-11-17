import React from 'react'
import { useState,useEffect} from 'react'
import {useNavigate}  from 'react-router-dom'
function AddTask({fetchTasks}) {
    let navigate = useNavigate()
    let backendurl = import.meta.env.VITE_BACKEND_URL

    const [taskName, setTaskName] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskNameError, setTaskNameError] = useState("")
    const [descriptionError, setDescriptionError] = useState("")

    function handleValidation(e) {
        e.preventDefault()
        try {
            if (!taskName) {
                setTaskNameError("Enter task name")

            } else {
                setTaskNameError("")
            } if (!taskDescription) {
                setDescriptionError("Enter description")
                return
            } else {
                setDescriptionError("")
            }
            handleSubmit()

        } catch (e) {
            console.log(e.message)
        }
    }

    async function handleSubmit() {
        try {
            let response = await fetch(`${backendurl}/api/user/create`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ taskName, taskDescription })
            })
            let data = await response.json()
            if (response.status === 201) {
                alert(data.message)
                setTaskName("")
                setTaskDescription("")
                fetchTasks()
                navigate('alltasks')
            }
            else if(response.status === 409){
                alert("user already exist")
            }
            else if(response.status === 401){
                alert("unauthorized")
            }
             else {
                alert("Internal Server Error")
            }
        } catch (e) {
            console.log(e.message)
        }
    }




    return (
        <div className='bg-[url("https://i.pinimg.com/1200x/a4/a8/1b/a4a81bd170711dfb11ed8a1facf39371.jpg")] bg-cover bg-center bg-no-repeat flex justify-center items-center h-[92vh] overflow-hidden'>

            <div className=" flex justify-center items-center " style={{ backdropFilter: 'blur(50px)'}} >
                <form className="w-[500px] p-4 bg-gray-900 shadow-xl pb-15  rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl relative"  onSubmit={handleValidation}>
                    <h1 className="text-3xl text-center mb-3 tracking-widest font-bold text-indigo-400  border-b-8 border-amber-400 inline-block border-dotted border-off pb-2">Todo App</h1>
                    <div>
                        <input type="text" data-testid="task-name" value={taskName} name="taskname" placeholder="Enter Task" onChange={(e) => setTaskName(e.target.value)} className="border-2 text-white w-full mt-2 px-1 py-3 border-pink-400 rounded outline-amber-500 focus:rounded-full" />
                        <p className='text-red-900'>{taskNameError}</p>
                    </div>
                    <div>
                        <textarea placeholder='Description' data-testid="task-description" value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)} className="border-2 w-full mt-2 px-1 py-3  text-white border-pink-400 rounded outline-amber-500 focus:rounded-xl focus:outline-b-red-200 ">
                        </textarea>
                        <p className='text-red-900'>{descriptionError}</p>
                    </div>
                    <div className='absolute right-2 bottom-[-26px]'>
                        <button data-testid='addtask-button' className="border-2 px-10 py-2 rounded bg-amber-300 mx-auto my-2 border-amber-400 cursor-pointer active:scale-95 transition-transform duration-75 font-bold tracking-wider hover:scale-105">Add Task</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default AddTask
