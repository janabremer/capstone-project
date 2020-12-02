import styled from 'styled-components/macro'
import { useState } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'

export default function SearchPage() {
  
    const [results, setResults] = useState([])

    function searchProducts(event) {
        event.preventDefault()
        const searchTerm = event.target.searchTerm.value;
        getProductsBySearch(searchTerm)
            .then(data => setResults(data))
    }

    return(
        <PageStyled>
            <ul>
                {results.map(product =>
                    <li key={product.id}>{product.name}</li>
                )}
            </ul>
            <form onSubmit={searchProducts}>
                <input
                    name="searchTerm" type="search" placeholder="insert a product name..."
                />
                <button>Search</button>
            </form>
        </PageStyled>
    )

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