import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function ProductInfo ({onClick, text}) {
    ProductInfo.propTypes = {
        onClick: PropTypes.func,
        text: PropTypes.string.isRequired,
    }

    return(
        <Button onClick={onClick}>{text}</Button>
    )
}

const Button = styled.button`
    font-size: inherit;
`