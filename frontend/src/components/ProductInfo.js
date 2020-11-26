import styled from 'styled-components/macro'

export default function ProductInfo ({name, water}) {


    return(
        <ProductInfoStyled>
            <Heading>{name}</Heading>
            <p>virtual water: {water} litres/kg</p>
        </ProductInfoStyled>
    )
}

const ProductInfoStyled = styled.section`
    display: grid;
    justify-items: center;
    gap: var(--gap-medium);
`

const Heading = styled.h2`
    color: var(--primary-blue);
    text-transform: uppercase;
    font-weight: 450;
    letter-spacing: .15em;
`