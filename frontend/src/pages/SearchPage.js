import styled from 'styled-components/macro'
import { useState } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import PageStyled from '../styles/PageStyled'


export default function SearchPage() {
    const [results, setResults] = useState([])
   
    return(
        <SearchPageStyled>       
            <SearchBar onSearch={searchProducts} />
            <ResultList results={results} />     
        </SearchPageStyled>
    )

    function searchProducts(searchTerm) {
        searchTerm.length >= 2 ? (
            getProductsBySearch(searchTerm)
                .then(data => setResults(data))
                .catch(error => alert(error))
         ) : setResults([])
    }
}


const SearchPageStyled = styled(PageStyled)`
    background-color: var(--primary-light);
    align-content: start;
`