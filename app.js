const dotenv = require("dotenv")
dotenv.config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
// 模板引擎
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './build'))
app.use(express.static('./build'))

app.use((req, res) => {
  res.status(404).send('Sorry cant find that!')
})

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    console.error('服务启动失败，重新启动。')
  } else {
    console.info(`服务启动成功:http://localhost:3000`)
  }
})
