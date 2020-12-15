import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

PhotoSource.propTypes = {
    protographer: PropTypes.string.isRequired,
    plattform: PropTypes.string,
    link: PropTypes.string
} 

const defaultPhoto = {
    photographer: 'Jong Marshes', 
    plattform: 'Unsplash', 
    url: 'https://unsplash.com/photos/79mNMAvSORg'
}

export default function PhotoSource ({photographer=defaultPhoto.photographer, plattform=defaultPhoto.plattform, url=defaultPhoto.url}) {
    return(
    <PhotoSourceStyled href={url} target="_blank">Photo by {photographer} on {plattform}</PhotoSourceStyled>
    )
}

const PhotoSourceStyled = styled.a`
    color: var(--primary-light-transparent);
    font-size: 50%;
    padding: 0 10px 10px 0;
    place-self: end;
    text-decoration: none;
`