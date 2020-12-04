import styled from 'styled-components/macro'
import { useState } from 'react'
import getProductsBySearch from '../services/getProductsBySearch'
import ResultList from '../components/ResultList'
import Search from '../components/Search'
import backgroundImage from '../assets/background.jpg'

export default function SearchPage() {
  
    
    const [results, setResults] = useState([])
   
    return(
        <PageStyled>
            <ResultList results={results} />            
            <Search onSearch={searchProducts} />
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
    align-items: start;
    background-image: url(${backgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    display: grid;
    padding: 40px;
    grid-template-rows: auto 48px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
`