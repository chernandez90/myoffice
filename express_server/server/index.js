import express from 'express'
import { createConnection } from 'mysql2'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({ extended: false }))

const db = createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'carlos',
  password: 'Plmhtdz.99',
  database: 'myoffice_db'
})

db.connect((err) => {
  if (err) {
    console.log('Unable to connect to DB')
  } else console.log('Database connected successfully')
})

function queryPromise(sql, values = []) {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (error, results) => {
      console.log('hit')
      if (error) {
        reject(error)
      } else {
        resolve(results)
      }
    })
  })
}
app.get('/test', async () => {
  console.log('get')
})

app.post('/', async (req, res) => {
  console.log('hi')
  try {
    console.log('here')
    var { FirstName, LastName, DOB, Phone, Address } = req.body

    if (!FirstName || !LastName) {
      throw new Error('FirstName and LastName are mandatory')
    }
    const issue = [FirstName, LastName, DOB, Phone, Address]
    const SQL =
      'Insert into customer ( FirstName, LastName, DOB, Phone, Address) values (?,?,?,?,?)'
    const result = await queryPromise(SQL, issue)
    res.json({ id: result.insertId, FirstName, LastName, DOB, Phone, Address })
  } catch (err) {
    console.log(err)
  }
})
app.listen(3003, () => {
  console.log('Server started')
})
