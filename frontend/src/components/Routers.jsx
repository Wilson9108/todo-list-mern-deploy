import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import AddTask from './AddTask'
import TaskData from './TaskData'
import PendingTasks from './PendingTasks'
import CompletedTasks from './CompletedTasks'
import Navbar from './Navbar'
function Routers() {
    let backendurl = import.meta.env.VITE_BACKEND_URL
    const [taskData, setTaskData] = useState([])
    async function fetchTasks() {
        try {
            let response = await fetch(`${backendurl}/api/user`)
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
        <>
            <div>
                <HashRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<AddTask taskData={taskData} fetchTasks={fetchTasks} />}></Route>
                        <Route path='/alltasks' element={<TaskData taskData={taskData} fetchTasks={fetchTasks} />}></Route>
                        <Route path='/pending-tasks' element={<PendingTasks />}></Route>
                        <Route path='/completed-tasks' element={<CompletedTasks />}></Route>
                    </Routes>
                </HashRouter>

            </div>
        </>
    )
}

export default Routers
