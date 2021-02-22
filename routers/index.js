const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  console.log('首页')
  res.render('html/index', { title: '首页' })
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

module.exports = router
