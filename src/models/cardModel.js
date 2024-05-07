/**
 * Updated by trungquandev.com's author on Oct 8 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import Joi from 'joi'
import { ObjectId } from 'mongodb'
import { Get_DB } from '~/config/mongodb'
import { OBJECT_ID_RULE, OBJECT_ID_RULE_MESSAGE } from '~/utils/validators'

// Define Collection (name & schema)
const CARD_COLLECTION_NAME = 'cards'
const CARD_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),
  columnId: Joi.string().required().pattern(OBJECT_ID_RULE).message(OBJECT_ID_RULE_MESSAGE),

  title: Joi.string().required().min(3).max(50).trim().strict(),
  description: Joi.string().optional(),

  createdAt: Joi.date().timestamp('javascript').default(Date.now),
  updatedAt: Joi.date().timestamp('javascript').default(null),
  _destroy: Joi.boolean().default(false)
})

const createdCard = async (data) => {
  try {
    const dataValidation = await CARD_COLLECTION_SCHEMA.validateAsync(data, { abortEarly: false })
    const _data = {
      ...dataValidation,
      boardId: new ObjectId(String(dataValidation.boardId)),
      columnId: new ObjectId(String(dataValidation.columnId))
    }
    return await Get_DB().collection(CARD_COLLECTION_NAME).insertOne(_data)
  } catch (error) {
    throw new Error(error)
  }
}

const findCardById = async (boardId) => {
  try {
    return await Get_DB().collection(CARD_COLLECTION_NAME).findOne({
      _id: new ObjectId(String(boardId)) })
  } catch (error) {
    throw new Error(error)
  }
}

export const cardModel = {
  CARD_COLLECTION_NAME,
  CARD_COLLECTION_SCHEMA,
  createdCard,
  findCardById
}