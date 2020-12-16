import styled from 'styled-components/macro'
import Accordion from '../components/Accordion'
import BasePage from '../styles/BasePage'

export default function InfoPage() {

    return (
        <InfoPageStyled>
            <Accordion title='What is virtual water?' content='Virtual water is the “hidden” water, that is needed for the production of something.' />
            <Accordion title='Why is this important?' content='Lorem Ipsum...' />
            <Accordion title='What can I do?' content='Lorem Ipsum...' />
            <Accordion title='Where is the data from?' content='Lorem Ipsum...' />
        </InfoPageStyled>
    )
}

const InfoPageStyled = styled(BasePage)`
    align-content: start;
`
