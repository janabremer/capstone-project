import styled from 'styled-components/macro'
import backgroundPhoto from '../assets/backgroundPhoto.jpg'
import { ReactComponent as Logo } from '../assets/logo.svg'
import PhotoSource from '../components/PhotoSource'
import PageStyled from '../styles/PageStyled'

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

const Content = styled.p`
    color: var(--primary-light-transparent);
`

const LogoStyled = styled(Logo)`
    color: var(--primary-light-transparent);
    height: 120px;
    justify-self: center;
`
