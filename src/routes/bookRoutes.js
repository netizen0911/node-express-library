const express = require('express')
const bookRouter = express.Router()
const sql = require('mssql')
const debug = require('debug')('app:bookRoutes')

function router(nav) {
  const books = [
    {
      title: 'War and Peace',
      genre: 'Historical Fiction',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    },
    {
      title: 'Les Miserables',
      genre: 'Historical Fiction',
      author: 'Victor Hugo',
      read: false
    },
    {
      title: 'The Time Machine',
      genre: 'Science Fiction',
      author: 'H. G. Wells',
      read: false
    },
    {
      title: 'The Wind in the Willows',
      genre: 'Fantasy',
      author: 'Kenneth Grahame',
      read: false
    },
    {
      title: 'Life On The Mississippi',
      genre: 'History',
      author: 'Mark Twain',
      read: false
    },
    {
      title: 'Childhood',
      genre: 'Biography',
      author: 'Lev Nikolayevich Tolstoy',
      read: false
    }
  ]

  bookRouter.route('/').get((req, res) => {
    const request = new sql.Request()

    request.query('select * from books')
      .then((result) => {
        debug(result)
        res.render('bookListView', {
          nav,
          title: 'Library',
          books: result.recordset
        })
      })
  })

  bookRouter.route('/:id').get((req, res) => {
    const { id } = req.params
    res.render('bookView', {
      nav,
      title: 'Library',
      book: books[id]
    })
  })
  return bookRouter
}

module.exports = router