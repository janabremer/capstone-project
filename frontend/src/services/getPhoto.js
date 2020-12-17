import PropTypes from 'prop-types'

export default function getPhoto(queryParam) {
    getPhoto.propTypes = {results: PropTypes.string}
    
    const pexelsApiKey = process.env.REACT_APP_PEXELS_API_KEY
    var myHeaders = new Headers()
    myHeaders.append("Authorization", pexelsApiKey)

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(`https://api.pexels.com/v1/search?per_page=1&query=${queryParam}`, requestOptions)
        .then(res => res.json()) 
}

// @TODO: Fetch photos in backend