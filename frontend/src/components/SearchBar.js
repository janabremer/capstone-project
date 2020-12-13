import styled from 'styled-components/macro'
import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

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
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0 30px;
    text-align: start;
    width: 100%;
    caret-color: var(--primary-blue);
    top: 0;
    left: 0;
    position: fixed;
    right: 0;
    height: 50px;
  
    &:focus {
        outline: none;
    }
  `