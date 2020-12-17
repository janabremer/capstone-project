import styled from 'styled-components/macro'
import Accordion from '../components/Accordion'
import BasePage from '../styles/BasePage'

export default function InfoPage() {
    return (
        <InfoPageStyled>
            <Accordion 
                title='What is virtual water?' 
                content='For the production and the trade of our food and all other products a lot of water is needed. For example, for watering plants or for feeding animals. This water is called "virtual water" or "hidden water".'
            />
            <Accordion 
                title='Why is this important?' 
                content='Clean fresh water is valuable. On average we use 4,000 liters of water every day. And a lot of this is imported from other countries where there is only little water.' 
            />
            <Accordion 
                title='What can I do?' 
                content='You can do a lot! Try to be aware when shopping: How far did the product travel to reach me? How much virtual water does it need? And is there enough water in the region where it is produced?' 
            />
            <Accordion 
                title='Where does the data come from?' 
                content='The data used in the app is from the ' 
                linkText='water footprint network'
                url='https://waterfootprint.org/en/resources/waterstat/product-water-footprint-statistics/'
            />
        </InfoPageStyled>
    )
}

const InfoPageStyled = styled(BasePage)`
    align-content: start;
    padding-top: 20px;
`
