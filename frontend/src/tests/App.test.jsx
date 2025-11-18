import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('App Component', () => {
    it('renders heading text', () => {
        render(<App />)
        const heading = screen.getByText(/Todo/i)
        // const input = screen.getByPlaceholderText(/enter task/i)
        // expect(input).toBeInTheDocument()
        expect(heading).toBeInTheDocument()
    })

    it('add two numbers correctly', () => {
        const sum = 2 + 2
        expect(sum).toBe(4)
    })
    test('testing matchers method after expect', () => {
        expect('hello').toContain('h')
        expect(0).toBeFalsy()
        expect(1).toBeTruthy();
    })
})