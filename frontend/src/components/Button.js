import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ProductInfo.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

export default function ProductInfo ({onClick, text}) {
    return(
        <Button onClick={onClick}>{text}</Button>
    )
}

const Button = styled.button`
    font-size: inherit;
`