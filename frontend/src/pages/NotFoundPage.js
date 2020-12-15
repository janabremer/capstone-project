import styled from 'styled-components/macro'
import BasePage from '../styles/BasePage'

export default function PageNotFound() {
    return(
        <BasePage>
            <ErrorMessage>404: Sorry, page not found...</ErrorMessage>
        </BasePage>
    )
}

const ErrorMessage = styled.span`
    padding: var(--padding);
`