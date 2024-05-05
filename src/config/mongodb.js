/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

let trelloDatabaseInstance = null
const MongoClientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const Connect_DB = async () => {
  console.log('Connecting to the database...')
  await MongoClientInstance.connect()
  trelloDatabaseInstance = MongoClientInstance.db(env.DATABASE_NAME)
}

export const Close_DB = async () => {
  console.log('Closing the database...')
  await MongoClientInstance.close()
}

export const Get_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Connect to the database first!')
  return trelloDatabaseInstance
}
