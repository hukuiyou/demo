const _books = [
    {"id": 1, "title": "iPad 4 Mini", "price": 500.01},
    {"id": 2, "title": "H&M T-Shirt White", "price": 10.99},
    {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99}
  ]
  
  export default {
    getBooks (cb) {
      setTimeout(() => cb(_books), 100)
    }
  }
  