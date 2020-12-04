import styled from 'styled-components/macro'
import { useState } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'
import ResultList from '../components/ResultList'
import SearchBar from '../components/SearchBar'


export default function SearchPage() {
  
    
    const [results, setResults] = useState([])
   
    return(
        <PageStyled>
            <ResultList results={results} />            
            <SearchBar onSearch={searchProducts} />
        </PageStyled>
    )

    function searchProducts(searchTerm) {
        if (searchTerm.length >= 2) {
            getProductsBySearch(searchTerm)
                .then(data => setResults(data))
                .catch(error => alert(error))
        } else {
            setResults([])
        }
    }
}


const PageStyled = styled.main`
    grid-template-rows: auto 90px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: grid;
    
`