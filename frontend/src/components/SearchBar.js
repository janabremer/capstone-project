import styled from 'styled-components/macro'
import { useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({onSearch}) {
    SearchBar.propTypes = {onSearch: PropTypes.func}
    
    const [searchTerm, setSearchTerm] = useState('')
 
    return(
        <SearchStyled onKeyUp={handleKeyUp} onSubmit={handleSubmit}>
                <label htmlFor="searchTerm" />
                <InputField
                    name="searchTerm" 
                    data-testid="search-input"
                    type="search"
                    placeholder="Search for product"
                    onChange={handleChange}
                    value={searchTerm}
                />
        </SearchStyled>
    )
    
    function handleChange(event) {
        setSearchTerm(event.target.value.trim())
    }

    function handleKeyUp(event) {
        event.preventDefault()
        onSearch(searchTerm)
    }

    function handleSubmit(event) {
        event.preventDefault()
    }
}

const SearchStyled = styled.form`
    padding: 20px 40px;
`

const InputField = styled.input`
    background-color: var(--primary-light-transparent);
    border-radius: 25px;
    border: none;
    /* border: solid 2px var(--secondary-dark); */
    box-shadow:  0px 0px 20px var(--shadow-dark);
    color: inherit;
    font-family: 'Oswald', sans-serif;
    font-size: 120%;
    font-weight: inherit;
    height: 50px;
    padding: 12px;
    text-align: center;
    width: 100%;
  
    &:focus {
        border-radius: 25px;
        border: solid 2px var(--primary-blue);
        outline: none;
    }
  `