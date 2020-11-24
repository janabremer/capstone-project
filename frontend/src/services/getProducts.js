export default function getProducts() {
    return fetch('http://virtualwater.local/products')
      .then(res => res.json())
  }