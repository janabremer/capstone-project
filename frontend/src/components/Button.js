import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
}

export default function Button({onClick, text, iconComponentLeft, iconComponentRight}) {
    return(
        <ButtonStyled onClick={onClick}>
            {iconComponentLeft}
            <span>{text}</span>
            {iconComponentRight}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    font-size: inherit;
    color: var(--primary-blue);
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    background-color: var(--primary-light-transparent);
    display: flex;
    place-items: center;
`
