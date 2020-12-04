import styled from 'styled-components/macro'
import { Link } from "react-router-dom";


export default function ResultList({results}) {

    return(
            <ResultListStyled>
                {Array.isArray(results) ? results.map(({id, category}) =>
                    <Link to={`/product/${id}`} key={id}>
                        <ResultItem data-testid="result-item">{category}</ResultItem>
                    </Link>) : 
                    <ResultItem data-testid="not-found">Product not found</ResultItem>}
            </ResultListStyled>
        )
}

const ResultListStyled = styled.section`
    align-content: start;
    display: grid;
    gap: var(--gap-medium);
    overflow-y: scroll;
    padding: 40px;

    a {
        text-decoration: none;
        width: 100%;
    }
`

const ResultItem = styled.div`
    background-color: var(--primary-light-transparent);
    border-radius: 15px;
    box-shadow:  0px 0px 20px var(--shadow-dark);
    color: var(--primary-blue);
    font-weight: 450;
    letter-spacing: .15em;
    padding: 10px 20px;
    width: 100%;
`