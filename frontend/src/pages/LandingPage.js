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
                <p>We drink about 3 liters of water every day. And we need about 120 liters for washing, brushing our teeth and cooking. But we actually consume a lot more - around 4,000 liters per day!</p>
                <p>Where does this water come from?</p>
                <p>For the production and the trade of our food a lot of water is needed. For example, for watering plants or for feeding animals. This water is called "virtual water" or "hidden water".</p>
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