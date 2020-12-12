import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ProductInfo ({handleClick, text}) {
    ProductInfo.propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string,
    }

    return(
        <Button onClick={handleClick}>{text}</Button>
    )
}

const Button = styled.button`
    font-size: inherit;
`