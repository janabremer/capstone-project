import { useState } from 'react'
import styled from 'styled-components/macro'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'
import getProductsBySearch from '../services/getProductsBySearch'
import BasePage from '../styles/BasePage'


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


const SearchPageStyled = styled(BasePage)`
    align-content: start;
`