import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PhotoSource.propTypes = {
    protographer: PropTypes.string.isRequired,
    plattform: PropTypes.string,
    link: PropTypes.string
}

export default function PhotoSource ({photographer, plattform, url}) {
    return(
    <PhotoSourceStyled href={url} target="_blank">Photo by {photographer} on {plattform}</PhotoSourceStyled>
    )
}

const PhotoSourceStyled = styled.a`
    text-decoration: none;
    color: var(--primary-light-transparent);
    place-self: end;
    font-size: 50%;
    padding: 0 10px 10px 0;
`