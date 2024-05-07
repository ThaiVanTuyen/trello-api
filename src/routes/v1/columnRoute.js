import express from 'express'
import { columnValidation } from '~/validations/columnValidation'
import { columnController } from '~/controllers/columnController'

const Router = express.Router()

Router.route('/')
  .post(columnValidation.CreateNewcolumn, columnController.CreateNewcolumn)

export const columnRoute = Router