import PropTypes from 'prop-types'

export default function getProductById(id) {
    getProductById.propTypes = {results: PropTypes.number}

    return fetch(`http://virtualwater.local/products/${id}`)
      .then(res => res.json())
  } 