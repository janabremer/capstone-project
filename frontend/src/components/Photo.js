import styled from 'styled-components/macro'

export default function Photo({url, photographer}) {
    return(
        <ImgStyled src={url} alt="" width="300px"/>
    )
}

const ImgStyled = styled.img`
    width: 100%;
    height: auto;
    border-radius: 5px;
    
`
