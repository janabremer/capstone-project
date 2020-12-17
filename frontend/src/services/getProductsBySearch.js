export default function getProductsBySearch(query) {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    return fetch(`${apiBaseUrl}/search/category/${query}`)
      .then(res => res.json())
  }