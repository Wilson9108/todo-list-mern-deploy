import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import AddTask from '../components/AddTask'

describe('Add Task Component', () => {
    it('testing the input values ', () => {
        render(
            <MemoryRouter>
                <AddTask />
            </MemoryRouter>
        )
        const input = screen.getByTestId('task-name')
        const description = screen.getByTestId('task-description')
        const addTaskButton = screen.getByTestId('addtask-button')
        console.log(input.placeholder)
        fireEvent.change(input,{target:{value:'eccomerce'}})
        fireEvent.change(description,{target:{value:'day 10 task'}})
        fireEvent.click(addTaskButton)
        console.log("taskName : " , input.value)
        console.log("taskDescriptiom : ",description.value)
        expect(input.value).toBe('eccomerce')
        expect(input.value).toMatch(/eccomerce/i)
    })
})
