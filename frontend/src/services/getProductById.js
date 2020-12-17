export default function getProductById(id) {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    return fetch(`${apiBaseUrl}/products/${id}`)
      .then(res => res.json())
  } 