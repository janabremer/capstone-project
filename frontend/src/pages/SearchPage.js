import styled from 'styled-components/macro'
import { useState } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'

export default function SearchPage() {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState()
   
    return(
        <PageStyled>
            <ResultsList>
                {results && results.map(product =>
                    <div key={product.id}>{product.category}</div>
                )}
            </ResultsList>
            
            <Search onKeyUp={searchProducts}>
                <input
                    name="searchTerm" 
                    type="search" 
                    placeholder="insert a product name..."
                    onChange={handleChange}
                    value={searchTerm}
                />
                <button>Search</button>
            </Search>
        </PageStyled>
    )
    
    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    function searchProducts(event) {
        event.preventDefault()
        searchTerm.length >= 2 && getProductsBySearch(searchTerm)
                                        .then(data => setResults(data))
    }
}


const PageStyled = styled.main`
    display: grid;
    height: 100vh;
    padding: 40px;
    align-items: start;
`

const ResultsList = styled.section`
    align-self: start;
    
`

const Search = styled.form`
    align-self: end;
`
