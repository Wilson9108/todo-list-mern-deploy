import React from 'react'
import { useState,useEffect } from 'react'
let backendurl = import.meta.env.VITE_BACKEND_URL
function PendingTasks() {
    const [taskData,setTaskData] = useState("")
        async function fetchTasks() {
        try {
            let response = await fetch(`${backendurl}/api/user/pending`)
            let data = await response.json()
            setTaskData(data)
            console.log(data)
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])




    return (
        <div className='bg-[url("https://i.pinimg.com/1200x/9d/d2/86/9dd28648454a2c26f43472351d521c33.jpg")] bg-cover bg-center bg-no-repeat h-[90vh]'>
        <h1 className='text-4xl pt-10 text-center font-bold tracking-widest'>Pending Tasks</h1>
        <div className='flex justify-center my-10 w-100%'>
            {taskData.length<=0 && <p className='text-3xl'>No Data Available</p>}
            {taskData.length > 0 && 
            <table className='w-[700px]'>
                <thead>
                    <tr>
                        <th className=' p-4 bg-gray-900 text-indigo-200 capitalize  rounded-tl-2xl'>task name</th>
                        <th className=' p-4 bg-gray-900 text-indigo-200 capitalize'>task description</th>
                        <th className=' p-4 bg-gray-900 text-indigo-200 capitalize rounded-tr-2xl'>Status</th>
                        

                    </tr>
                </thead>
                <tbody>

                    {taskData.map(item => (
                        <tr key={item._id}>
                            <td className='border p-2 bg-amber-100'>{item.taskName}</td>
                            <td className='border p-2 bg-amber-100'>{ item.taskDescription}</td>

                                <td className='border p-3 bg-amber-100'>
                                {item.status === 0 &&<h4>Pending</h4>}
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

export default PendingTasks
