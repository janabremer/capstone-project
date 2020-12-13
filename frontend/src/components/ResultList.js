import styled from 'styled-components/macro'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export default function ResultList({results}) {
    ResultList.propTypes = {results: PropTypes.array}

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
    display: grid;

    a {
        text-decoration: none;
        width: 100%;
        color: inherit;
    }
`

const ResultItem = styled.div`
    letter-spacing: .2em;
    padding: 20px 30px;
    border-bottom: solid 1px var(--shadow-dark);
    width: 100%;
    text-transform: lowercase;
`