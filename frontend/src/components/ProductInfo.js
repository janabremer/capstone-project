import styled from 'styled-components/macro'

export default function ProductInfo ({name, water}) {
    return(
        <ProductInfoStyled>
            <Heading>{name}</Heading>
            <Content>{water} litres (1kg)</Content>

        </ProductInfoStyled>
    )
}

const ProductInfoStyled = styled.section`
    background-color: var(--primary-light-transparent);
    border-radius: 5px;
    box-shadow:  0px 0px 20px var(--shadow-dark);
    display: grid;
    gap: var(--gap-medium);
    opacity: 0.6; 
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