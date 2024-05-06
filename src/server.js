/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import 'dotenv/config'
import express from 'express'
import { Connect_DB, Close_DB } from './config/mongodb'
import { env } from './config/environment'
import { APIs_V1 } from './routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'
import cors from 'cors'
import { corsOptions } from './config/cors'

const exitHook = require('async-exit-hook')

const StartServer = async () => {
  console.log('Starting server...')
  const app = express()

  app.use(cors(corsOptions))

  app.use(express.json())

  app.get('/', (req, res) => {
    console.log(env.AUTHOR)
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.use('/v1', APIs_V1)

  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`I am running at http://${ env.APP_HOST }:${ env.APP_PORT }/`)
  })
}
exitHook(() => {
  Close_DB()
  console.log('Server is closed!')
})

Connect_DB()
  .then(() => console.log('Connected successfully to the database!'))
  .then(() => StartServer())
  .catch(error => {
    console.error(error)
    process.exit(0)
  })

