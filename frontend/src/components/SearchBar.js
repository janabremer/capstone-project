import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components/macro'

SearchBar.propTypes = {onSearch: PropTypes.func}

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('')
    const searchField = useRef(null)
    useEffect(()=>{
        searchField.current.focus()
    },[])
 
    return(
        <SearchBarStyled onKeyUp={handleKeyUp} onSubmit={handleSubmit}>
                <label htmlFor="searchTerm" />
                <InputFieldStyled
                    name="searchTerm" 
                    ref={searchField}
                    data-testid="search-input"
                    type="search"
                    placeholder="search a product..."
                    onChange={handleChange}
                    value={searchTerm}
                />
        </SearchBarStyled>
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
const SearchBarStyled = styled.form`
    height: 50px;
`

const InputFieldStyled = styled.input`
    background-color: var(--primary-light-transparent);
    border: none;
    box-shadow:  0 0 20px var(--shadow-dark);
    caret-color: var(--primary-blue);
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    height: 50px;
    left: 0;
    max-width: var(--max-width);
    padding: 0 30px;
    position: fixed;
    right: 0;
    text-align: start;
    top: 0;
    width: 100%;
  
    &:focus {
        outline: none;
    }
  `