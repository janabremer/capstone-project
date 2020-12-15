import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';

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
        color: inherit;
        text-decoration: none;
        width: 100%;
    }
`

const ResultItem = styled.div`
    border-bottom: solid 1px var(--shadow-dark);
    letter-spacing: .2em;
    padding: 20px 30px;
    text-transform: lowercase;
    width: 100%;
`