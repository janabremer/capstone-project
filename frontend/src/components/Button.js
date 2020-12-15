import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

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
    background-color: var(--primary-light-transparent);
    border-radius: 10px;
    border: none;
    color: var(--primary-blue);
    display: flex;
    font-size: inherit;
    padding: 10px 20px;
    place-items: center;
`
