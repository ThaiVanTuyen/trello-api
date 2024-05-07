/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { cardModel } from '~/models/cardModel'
const CreateNewCard = async (reqbody) => {
  const newCard = {
    ...reqbody
  }
  const createdCard = await cardModel.createdCard(newCard)
  const getNewCard = await cardModel.findCardById(createdCard.insertedId)
  return getNewCard
}

export const cardService = {
  CreateNewCard
}