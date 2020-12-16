import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import ListBox from './ListBox'

export default function ResultList({results}) {
    ResultList.propTypes = {results: PropTypes.array}

    return(
            <ResultListStyled>
                {Array.isArray(results) ? results.map(({id, category}) =>
                    <Link to={`/product/${id}`} key={id}>
                        <ListBox data-testid="result-item">{category}</ListBox>
                    </Link>) : 
                    <ListBox data-testid="not-found">Product not found</ListBox>}
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