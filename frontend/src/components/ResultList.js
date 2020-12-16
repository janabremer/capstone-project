import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import styled from 'styled-components/macro';
import ListItem from './ListItem'

export default function ResultList({results}) {
    ResultList.propTypes = {results: PropTypes.array}

    return(
            <ResultListStyled>
                {Array.isArray(results) ? results.map(({id, category}) =>
                    <Link to={`/product/${id}`} key={id}>
                        <ListItem data-testid="result-item">{category}</ListItem>
                    </Link>) : 
                    <ListItem data-testid="not-found">Product not found</ListItem>}
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