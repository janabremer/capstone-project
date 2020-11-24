export default function getProductById(id) {
    return fetch(`http://virtualwater.local/products/${id}`)
      .then(res => res.json())
  }