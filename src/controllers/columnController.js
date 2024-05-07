/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { StatusCodes } from 'http-status-codes'
import { columnService } from '~/services/columnService'

const CreateNewColumn = async (req, res, next) => {
  try {
    const newColumn = await columnService.CreateNewColumn(req.body)
    res.status(StatusCodes.CREATED).json(newColumn)
  } catch (error) {next(error)}
}

export const columnController = { CreateNewColumn }