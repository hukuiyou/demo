import axios from 'axios'
import book1Jpg from '../../assets/b1.jpg';
//import book2Jpg from '../../assets/b2.jpg';
//http://book.xuxiaoye.com/book/api/books



//const url = 'http://book.xuxiaoye.com/book/api/'
const url = 'http://106.14.220.103/book/api/'

// const _books = [
//   {
//     id: 1,
//     title: '历史',
//     icon: book1Jpg
//   }, {
//     id: 2,
//     title: '文学',
//     icon: book2Jpg
//   },
//   {
//     id: 3,
//     title: '小说',
//     icon: book2Jpg
//   },
//   // {
//   //   id: 4,
//   //   title: '科技',
//   //   icon: book1Jpg
//   // },
// ]

export default {
  fetch(url, cb) {
    axios.get(url)
    .then((res) => {
        if(res.status >= 200 && res.status < 300) {
            console.info(res.data);
            cb(res.data);
        }
    })
    .catch((error) => {
        return Promise.reject(error)
    })
  },

  getBooks(cb) {
    const requestUrl = url + 'books';
    return this.fetch(requestUrl, cb);
  },

  login(cb) {
    setTimeout(() => cb(), 100);
  },

  getBookDetail(bookId, cb) {
    const requestUrl = url + `books(${bookId})?_expand=chapters`;
    return this.fetch(requestUrl, cb);
  },

  getAuthors(cb) {
    const requestUrl = url + `authors`;
    return this.fetch(requestUrl, cb);
  },

  getAuthorDetail(authorId, cb) {
    const requestUrl = url + `authors(${authorId})`;
    return this.fetch(requestUrl, cb);
  }
}
