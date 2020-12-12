export default function getProductsPerPage(pageLink) {
    return fetch(`http://virtualwater.local${pageLink}`)
      .then(res => res.json())
  }