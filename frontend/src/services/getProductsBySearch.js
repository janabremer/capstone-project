export default function getProductsBySearch(query) {
    return fetch(`http://virtualwater.local/products/search/${query}`)
      .then(res => res.json())
  }