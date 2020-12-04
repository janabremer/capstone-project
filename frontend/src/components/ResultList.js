import styled from 'styled-components/macro'
import { Link } from "react-router-dom";


export default function ResultList({results, handleClick}) {

    return(
            <ResultListStyled>
                {Array.isArray(results) ? results.map(({id, category}) =>
                    <Link to={`/product/${id}`} key={id}>
                        <ResultItem>{category}</ResultItem>
                    </Link>) : 
                    <ResultItem>Product not found</ResultItem>}
            </ResultListStyled>
        )
}

const ResultListStyled = styled.section`
    align-self: start;
    display: grid;
    gap: var(--gap-medium);
    place-items: center;
    width: 100%;
    overflow-y: scroll;
    display: grid;
    align-content: start;
`

const ResultItem = styled.div`
    background-color: var(--primary-light-transparent);
    border-radius: 15px;
    box-shadow:  0px 0px 20px var(--shadow-dark);
    color: var(--primary-blue);
    font-weight: 450;
    letter-spacing: .15em;
    padding: 10px;
    width: 100%;
`