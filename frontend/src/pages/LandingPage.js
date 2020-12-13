import styled from 'styled-components/macro'
import PageStyled from '../styles/PageStyled'
import backgroundPhoto from '../assets/backgroundPhoto.jpg'
import PhotoSource from '../components/PhotoSource'
// import logo from '../assets/logo'

export default function LandingPage() {
    return (
        <LandingPageStyled imgSrc={backgroundPhoto}>
            {/* <logo /> */}
            <Heading>
                <h2>how much</h2>
                <h1>water</h1>
                <h2>do you</h2>
                <h1>eat?</h1>
            </Heading>
            <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis numquam obcaecati mollitia minima nihil voluptatibus pariatur, earum qui dignissimos nostrum aspernatur iste quaerat fugiat repudiandae suscipit. Esse, reprehenderit nam?</Content>
            {/* <Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur corporis numquam obcaecati mollitia minima nihil voluptatibus pariatur, earum qui dignissimos nostrum aspernatur iste quaerat fugiat repudiandae suscipit. Esse, reprehenderit nam?</Content> */}

            <PhotoSource photographer={'Jong Marshes'} plattform={'Unsplash'} url={'https://unsplash.com/photos/79mNMAvSORg'}/>
        </LandingPageStyled>

    )
}

const LandingPageStyled = styled(PageStyled)`
    background-image: url(${props => props.imgSrc});
    background-position: left;
    padding: var(--gap-large);
    /* padding-bottom: 60px; */
`

const Heading = styled.section`
    color: var(--primary-light-transparent);
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
