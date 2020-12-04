import styled from 'styled-components/macro'
import { useState } from 'react'

export default function Search({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')

    return(
        <SearchStyled onKeyUp={handleKeyUp}>
                <label htmlFor="searchTerm" />
                <InputField
                    name="searchTerm" 
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
}

const SearchStyled = styled.form`
    align-self: end;
`

const InputField = styled.input`
    background-color: var(--primary-light-transparent);
    border-radius: 25px;
    border: solid 2px var(--secondary-dark);
    box-shadow:  0px 0px 20px var(--shadow-dark);
    color: inherit;
    font-family: 'Oswald', sans-serif;
    font-size: 120%;
    font-weight: inherit;
    padding: 12px;
    text-align: center;
    width: 100%;
  
    &:focus {
        border-radius: 25px;
        border: solid 2px var(--primary-blue);
        outline: none;
    }
  `