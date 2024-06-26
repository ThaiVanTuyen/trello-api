/* eslint-disable no-console */
/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { boardModel } from '~/models/boardModel'
import { columnModel } from '~/models/columnModel'
const CreateNewColumn = async (reqbody) => {
  const newColumn = {
    ...reqbody
  }
  const createdColumn = await columnModel.createdColumn(newColumn)
  const getNewColumn = await columnModel.findColumnById(createdColumn.insertedId)
  if (getNewColumn) {
    await boardModel.pushColumnOrderIds(getNewColumn)
  }
  return getNewColumn
}

export const columnService = {
  CreateNewColumn
}