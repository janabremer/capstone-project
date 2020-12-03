import styled from 'styled-components/macro'
import { useState, useEffect } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'

export default function SearchPage() {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState()
   
    return(
        <PageStyled>
            <ul>
                {results ? results.map(product =>
                    <li key={product.id}>{product.category}</li>
                ) : <li>no results</li> }
                {console.log(results)}
            </ul>
            <form onSubmit={searchProducts}>
                <input
                    name="searchTerm" 
                    type="search" 
                    placeholder="insert a product name..."
                    onChange={handleChange}
                    value={searchTerm}
                />
                <button>Search</button>
            </form>
        </PageStyled>
    )
    
    function handleChange(event) {
        setSearchTerm(event.target.value)
    }

    function searchProducts(event) {
        event.preventDefault()
        getProductsBySearch(searchTerm)
            .then(data => setResults(data))
    }

}




const PageStyled = styled.main`

    display: grid;
    gap: var(--gap-large);
    height: 100vh;
    padding: 40px;
    place-items: end;
    flex: 1 0 100%;
    scroll-snap-align: start;
`