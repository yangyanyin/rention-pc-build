const express = require('express')
const router = express.Router()

const homeServer = require('../api/homeServer')
router.get('/', function (req, res) {
  homeServer((data) => {
    res.render('html/index', data)
  })
})

router.get('/c/:name', function (req, res) {
  res.render('html/index', { title: '分类页面' })
})

router.get('/c/d/:name', function (req, res) {
  res.render('html/index', { title: '详情页面' })
})

router.get('*', function (req, res) {
  res.render('html/index', { title: '全局页面' })
})

// function homeServer (c) {
//   c({title: 'homeServer'})
// }

module.exports = router
