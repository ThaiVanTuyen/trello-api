/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { cardService } from '~/services/cardService'

const CreateNewCard = async (req, res, next) => {
  try {
    const newCard = await cardService.CreateNewCard(req.body)
    res.status(StatusCodes.CREATED).json(newCard)
  } catch (error) {next(error)}
}

export const cardController = { CreateNewCard }