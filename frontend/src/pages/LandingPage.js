import styled from 'styled-components/macro'
import backgroundPhoto from '../assets/backgroundPhoto.jpg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import PhotoLink from '../components/PhotoLink'
import BasePage from '../styles/BasePage'

export default function LandingPage() {
    return (
        <LandingPageStyled imgSrc={backgroundPhoto}>
            <LogoStyled />
            <Heading>
                <h2>how much</h2>
                <h1>water</h1>
                <h2>do you</h2>
                <h1>eat?</h1>
            </Heading>
            <Content>
                <p>Virtual water is the “hidden” water, that is needed for the production of something.</p>
                <p>Discover the app and find out about the water in your food!</p>
            </Content>
            <PhotoLink />
        </LandingPageStyled>
        
    )
}

const LandingPageStyled = styled(BasePage)`
    background-image: url(${props => props.imgSrc});
    background-position: left;
    padding: var(--padding);
    gap: var(--gap-extra-large);
`

const Heading = styled.section`
    color: var(--primary-light-transparent);
    
    /* margin-bottom: var(--gap-extra-large); */
    h1 {
        font-size: 350%;
        font-weight: 800;
        letter-spacing: 0.4rem;
        text-transform: uppercase;
    }
    h2 {
        font-size: 250%;
        font-weight: 400;  
        letter-spacing: 0.2rem;
    }
`

const Content = styled.section`
    color: var(--primary-light-transparent);
    display: grid;
    gap: var(--gap-medium);
`

const LogoStyled = styled(Logo)`
    color: var(--primary-light-transparent);
    height: 130px;
    justify-self: center;
`