export default function getProductsPerPage(pageLink) {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
    console.log(apiBaseUrl)
    return fetch(`${apiBaseUrl}${pageLink}`)
      .then(res => res.json())
}