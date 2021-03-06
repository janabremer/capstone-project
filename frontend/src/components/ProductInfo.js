import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

ProductInfo.propTypes = {
    name: PropTypes.string,
    water: PropTypes.number,
    requestStatus: PropTypes.string
}

export default function ProductInfo ({name, water, requestStatus}) {
    switch (requestStatus) {
        case 'LOADING':
            return(
                <ProductInfoStyled>
                    <Content>loading...</Content>
                </ProductInfoStyled>
            )
        case 'ERROR':
            return(
                <ProductInfoStyled>
                    <Content>error: server is down</Content>
                </ProductInfoStyled>
            )
        default:
            return(
                <ProductInfoStyled>
                    <Heading>{name}</Heading>
                    <Content>{water} litres / kg</Content>
                </ProductInfoStyled>
            )
    }
}

const ProductInfoStyled = styled.section`
    background-color: var(--primary-light-transparent);
    display: grid;
    gap: var(--gap-small);
    padding: 15px;
    place-items: center;
    width: 100%;
`

const Heading = styled.h1`
    font-size: 170%;
    font-weight: 700;
    letter-spacing: 0.25rem;
    text-align: center;
    text-transform: uppercase;
`

const Content = styled.span`
    color: var(--secondary-dark);
    font-size: 120%;
    text-align: center;
`