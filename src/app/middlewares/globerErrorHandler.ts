/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express'
import { IGenericErrorMessage } from '../../interfaces/error'
import handleValidationError from '../../errors/handleValidationError'
import config from '../../config'
import { Error } from 'mongoose'
import ApiError from '../../errors/ApiError'
import { errorLogger } from '../../shared/logger'
import { ZodError } from 'zod'
import handleZodError from '../../errors/handleZodError'

const globelErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  config.env === 'development'
    ? console.log('globel error handler', err)
    : errorLogger.error('glober error handler ~', err)

  let statusCode = 500
  let message = 'something went wrong !'
  let errorMessages: IGenericErrorMessage[] = []

  if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessage
  } else if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessage
  } else if (err instanceof ApiError) {
    statusCode = err?.statusCode
    message = err.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  } else if (err instanceof Error) {
    message = err?.message
    errorMessages = err?.message
      ? [
          {
            path: '',
            message: err?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? err?.stack : undefined,
  })
  next()
}

export default globelErrorHandler
