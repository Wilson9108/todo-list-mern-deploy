import React from 'react'
import { useState } from 'react'

function TaskData({ fetchTasks, taskData }) {
    let backendurl = import.meta.env.VITE_BACKEND_URL
    const [taskId, setTaskId] = useState(null)
    const [inputValues, setInputValues] = useState({
        taskName: "",
        taskDescription: ""
    })

    //handle update task
    async function handleUpdate(id) {

        try {
            let response = await fetch(`${backendurl}/api/user/update/task/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputValues)
            })
            let data = await response.json()
            if (response.status === 200) {
                alert(data.message)
                setTaskId(null)
                fetchTasks()
            } else {
                alert(data.message)
                setTaskId(null)
            }
        } catch (e) {
            console.log(e.message)
        }
    }

    //handle complete task
    async function handleComplete(id) {

        try {
            let response = await fetch(`${backendurl}/api/user/complete/task/${id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' }
            })
            let data = await response.json()
            if (response.status === 200) {
                alert(data.message)
                setTaskId(null)
                fetchTasks()
            } else {
                alert(data.message)
                setTaskId(null)
            }
        } catch (e) {
            console.log(e.message)
        }

    }
    //handle delete task
    async function handleDelete(id) {
        try {
            let response = await fetch(`${backendurl}/api/user/delete/task/${id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(inputValues)
            })
            let data = await response.json()
            if (response.status === 200) {
                alert(data.message)
                setTaskId(null)
                fetchTasks()
            } else {
                alert(data.message)
                setTaskId(null)
            }
        } catch (e) {
            console.log(e.message)
        }

    }

    //input change for the udpate
    function handleInputChange(e) {
        try {
            let { name, value } = e.target
            setInputValues(prev => ({
                ...prev,
                [name]: value
            }))

        } catch (e) {
            console.log(e.message)
        }
    }

    //getting task id for showing the input box for update
    function handleGetId(item) {
        try {
            setTaskId(item._id)
            setInputValues(prev => ({ ...prev, taskName: item.taskName, taskDescription: item.taskDescription }))

        } catch (e) {
            console.error(e.message)
        }
    }

    //handle cancel update
    function handleCancel() {
        setTaskId(null)
    }


    return (
        <div className='bg-[url("https://i.pinimg.com/1200x/c1/2a/aa/c12aaa27057344a7872cd87d8ae3bd93.jpg")] bg-cover bg-center bg-no-repeat h-screen'>
            <h1 className='text-4xl pt-10 text-center font-bold tracking-widest'>All Tasks</h1>
            <div className='flex justify-center my-10'>
                {taskData.length <= 0 && <p className='text-3xl'>No Data Available</p>}
                {taskData.length > 0 &&
                    <table className=' border-collapse w-[700px]'>
                        <thead>
                            <tr>
                                <th className=' p-4 bg-gray-900 text-indigo-200 capitalize rounded-tl-2xl'>task name</th>
                                <th className=' p-4 bg-gray-900 text-indigo-200 capitalize'>task description</th>
                                <th className=' p-4 bg-gray-900 text-indigo-200 capitalize'>Update</th>
                                <th className=' p-4 bg-gray-900 text-indigo-200 capitalize'>Delete</th>
                                <th className=' p-4 bg-gray-900 text-indigo-200 capitalize rounded-tr-2xl'>Status</th>


                            </tr>
                        </thead>
                        <tbody>

                            {taskData.map(item => (
                                <tr key={item._id}>
                                    <td className='border p-2 bg-amber-100'>{item._id == taskId ? <input type='text' name="taskName" value={inputValues.taskName} placeholder='Full Name' onChange={handleInputChange} className="border-2 px-1 py-2 rounded w-full outline-indigo-500 border-pink-400 mt-2" /> : item.taskName}</td>
                                    <td className='border p-2 bg-amber-100'>{item._id == taskId ? <textarea name="taskDescription" value={inputValues.taskDescription} placeholder='Enter Description' onChange={handleInputChange} className="border-2 px-1 py-2 rounded w-full outline-indigo-500 border-pink-400 mt-2" /> : item.taskDescription}</td>
                                    {item.status === 0 ?
                                        <td className='border p-3 bg-amber-100'>
                                            {item._id == taskId ?
                                                <div className='flex justify-between'>
                                                    <button className='border-2 px-2  py-1 mx-2 bg-indigo-600 border-indigo-400 text-white cursor-pointer active:scale-75 transition-transform duration-75' onClick={() => handleUpdate(item._id)}>save</button>
                                                    <button className='border-2 px-2  py-1 mx-2 bg-green-600 border-green-400 text-white cursor-pointer active:scale-75 transition-transform duration-75' onClick={handleCancel} >cancel</button>
                                                </div>
                                                : <button className='border-2 px-2  py-1 mx-2 bg-green-600 border-green-400 text-white cursor-pointer active:scale-75 transition-transform duration-75' onClick={() => handleGetId(item)}>update</button>}
                                        </td> :
                                        <td className='border p-3 bg-amber-100'><p></p></td>
                                    }
                                    <td className='border p-3 bg-amber-100'>
                                        <button className='border-2 px-2 py-1  mx-2 bg-red-700 text-white cursor-pointer active:scale-75 transition-transform duration-75' onClick={() => handleDelete(item._id)}>delete</button>
                                    </td>
                                    <td className='border p-3 bg-amber-100'>
                                        {item.status === 1 ?
                                            <button className='border-2 border-amber-50 px-2 py-1 text-black  cursor-not-allowed'>Completed</button> :
                                            <button className={
                                                `border-2 px-2 py-1  mx-2 bg-indigo-700 text-white cursor-pointer active:scale-75 transition-transform duration-75`} onClick={() => handleComplete(item._id)}>completed</button>

                                        }
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                    // :<div className='text-3xl animate-spin border-6 border-gray-500 rounded-full h-[50px] w-[50px] border-t-indigo-800'></div>
                }


            </div>

        </div>

    )
}

export default TaskData
