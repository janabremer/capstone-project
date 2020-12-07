import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ResultList from './ResultList'

afterEach(cleanup)

const results = [
    {category: "Tomatoes", id: 192},
    {category: "Sweet patotoes", id: 56}
]

describe('SearchBar', () => {

    it('Renders ResultItem component for each result', () => {
        const {getByText} = render (<MemoryRouter><ResultList results={results}/></MemoryRouter> )
        results.forEach(({category, id}) => {
            expect(getByText(category)).toBeInTheDocument()
        })
    })

    it('Click on each ResultItem navigate to correct ProductPage', () => {
        const {getByText} = render (<MemoryRouter><ResultList results={results}/></MemoryRouter> )
        
        results.forEach(({category}) => {
            userEvent.click(getByText(category))
            expect(screen.getByText(category)).toBeInTheDocument()
        })
    })
})