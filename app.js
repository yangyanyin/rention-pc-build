// const dotenv = require("dotenv")
// dotenv.config()
const express = require('express')
const app = express()
const ejs = require('ejs')
const path = require('path')
const routers = require('./routers/index')

// 模板引擎
app.engine('html', ejs.__express)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, './build'))
app.use(express.static('./build'))

app.use(routers)
app.use((req, res) => {
  res.status(404).send('Sorry cant find that!')
})

app.listen(3002, '0.0.0.0', (req, err) => {
  if (err) {
    console.error('服务启动失败，重新启动。')
  } else {
    console.info(`服务启动成功:http://localhost:3000`)
  }
})
