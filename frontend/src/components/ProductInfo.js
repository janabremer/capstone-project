import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ProductInfo ({name, water, apiState}) {
    ProductInfo.propTypes = {
        name: PropTypes.string,
        water: PropTypes.number,
        apiState: PropTypes.string
    }
    console.log(water)

    switch (apiState) {
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
                    <Content>{water} litres (1kg)</Content>
                </ProductInfoStyled>
            )
    }
}

const ProductInfoStyled = styled.section`
    background-color: var(--primary-light-transparent);
    border-radius: 25px;
    box-shadow:  0px 0px 20px var(--shadow-dark);
    display: grid;
    gap: var(--gap-medium);
    padding: 25px;
    place-items: center;
    width: 100%;
`

const Heading = styled.h2`
    color: var(--primary-blue);
    font-weight: 450;
    letter-spacing: .15em;
    text-transform: uppercase;
`

const Content = styled.span`
    font-size: 130%;
`