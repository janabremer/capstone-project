import { render, cleanup, fireEvent } from '@testing-library/react'
import user from '@testing-library/user-event'
import SearchBar from './SearchBar'

afterEach(cleanup)

const onSearchMock = jest.fn()

describe('SearchBar', () => {

    it('Displays the search input field', () => {
        const {getByTestId} = render (<SearchBar onSearch={onSearchMock} />)
        expect(getByTestId('search-input')).toHaveValue('')
    })

    it('Calls onSearchMock the correct number of times and with correct search term', () => {
        const {getByTestId} = render (<SearchBar onSearch={onSearchMock} />)
        user.type(getByTestId('search-input'), 'soy')
        expect(getByTestId('search-input')).toHaveValue('soy')
        expect(onSearchMock).toHaveBeenCalledTimes(3)
        expect(onSearchMock).toHaveBeenCalledWith('soy')
    })
})