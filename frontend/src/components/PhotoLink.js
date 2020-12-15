import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PhotoLink.propTypes = {
    protographer: PropTypes.string,
    plattform: PropTypes.string,
    url: PropTypes.string
} 

const defaultPhoto = {
    photographer: 'Jong Marshes', 
    plattform: 'Unsplash', 
    url: 'https://unsplash.com/photos/79mNMAvSORg'
}

export default function PhotoLink ({photographer=defaultPhoto.photographer, plattform=defaultPhoto.plattform, url=defaultPhoto.url}) {
    return(
    <PhotoLinkStyled href={url} target="_blank">Photo by {photographer} on {plattform}</PhotoLinkStyled>
    )
}

const PhotoLinkStyled = styled.a`
    color: var(--primary-light-transparent);
    font-size: 50%;
    padding: 0 10px 10px 0;
    place-self: end;
    text-decoration: none;
`