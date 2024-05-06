/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { slugify } from '~/utils/formatters'
import { boardModel } from '~/models/boardModel'
const CreateNewBoard = async (reqbody) => {
  const newBoard = {
    ...reqbody,
    slug: slugify(reqbody.title)
  }

  const createdBoard = await boardModel.createdBoard(newBoard)

  const getNewBoard = await boardModel.findBoardById(createdBoard.insertedId)
  console.log('createdBoard', getNewBoard)
  return getNewBoard
}
const GetBoard = async (boardId) => {
  console.log('Get Board Services: ', boardId)
  const getBoard = await boardModel.GetBoard(boardId)
  console.log('Get Board', getBoard)
  return getBoard
}

export const boardService = {
  CreateNewBoard,
  GetBoard
}