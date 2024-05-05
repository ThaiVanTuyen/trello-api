/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import boardService from '~/services/boardService'

const CreateNewBoard = async (req, res, next) => {
  try {
    const newBoard = await boardService(req.body)
    res.status(StatusCodes.CREATED).json(newBoard)
  } catch (error) {next(error)}
}

export const boardController = { CreateNewBoard }