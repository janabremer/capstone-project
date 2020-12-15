import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Button = styled.button`
    font-size: inherit;
`

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string.isRequired,
}

export default Button