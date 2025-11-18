import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import AddTask from '../components/AddTask'

describe('Add Task Component', () => {
    it('testing the input values ', () => {
        render(
            <MemoryRouter>
                <AddTask />
            </MemoryRouter>
        )
    })
})
