export default function getProducts() {
    return fetch('http://virtualwater.local/categories')
      .then(res => res.json())
  }