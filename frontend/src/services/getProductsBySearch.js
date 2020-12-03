export default function getProductsBySearch(query) {
    return fetch(`http://virtualwater.local/search/category/${query}`)
      .then(res => res.json())
  }