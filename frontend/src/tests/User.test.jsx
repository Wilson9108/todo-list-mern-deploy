import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import AddTask from '../components/AddTask';
import TaskData from '../components/TaskData';
import Routers from '../components/Routers'
import App from '../App'
import { MemoryRouter, Route, Routes } from 'react-router-dom';
let backendurl = import.meta.env.VITE_BACKEND_URL

vi.stubGlobal('fetch', vi.fn())

// beforeEach(()=>{
//     fetch.mockClear()
// })

it('renders user data from API ', async () => {
    const fakeUser = [{ _id: 1, taskName: 'day 6 task', taskDescription: "learn what is jest mock" }]
    fetch.mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue(fakeUser)
    })

    render(
        <MemoryRouter initialEntries={['/alltasks']}>
            <Routes>
                <Route path='/alltasks' element={<TaskData taskData={fakeUser} fetchTasks={vi.fn()} />}></Route>
            </Routes>
        </MemoryRouter>
    )

    const taskName = screen.getByTestId('task-name')
    expect(taskName).toBeInTheDocument('day 6 task')
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(`${backendurl}/api/user`)

})