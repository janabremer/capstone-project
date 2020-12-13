import styled from 'styled-components/macro'
import PageStyled from '../styles/PageStyled'
import backgroundPhoto from '../assets/backgroundPhoto.jpg'
import PhotoSource from '../components/PhotoSource'
import { ReactComponent as Logo } from '../assets/logo.svg'

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
                Virtual water is the “hidden” water, that is needed for the production of something.
            </Content>
            <Content>
                Discover the app and find out about the water in your food!
            </Content>

            <PhotoSource />
        </LandingPageStyled>

    )
}

const LandingPageStyled = styled(PageStyled)`
    background-image: url(${props => props.imgSrc});
    background-position: left;
    padding: 50px;
    gap: var(--gap-large);
`

const Heading = styled.section`
    color: var(--primary-light-transparent);
    margin-bottom: var(--gap-extra-large);
    h1 {
        text-transform: uppercase;
        font-size: 350%;
        letter-spacing: 0.4rem;
        font-weight: 800;
    }
    h2 {
        font-size: 250%;
        letter-spacing: 0.2rem;
        font-weight: 400;  
    }
`

const Content = styled.p`
    color: var(--primary-light-transparent);
`

const LogoStyled = styled(Logo)`
    height: 120px;
    justify-self: center;
    color: var(--primary-light-transparent);
`
