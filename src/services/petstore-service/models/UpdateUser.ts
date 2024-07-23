import { User } from './User'

export type UpdateUserPathParams = {
  /**
   * @description name that needs to be updated
   * @type string
   */
  username: string
}
/**
 * @description successful operation
 */
export type UpdateUserError = any
/**
 * @description Update an existent user in the store
 */
export type UpdateUserMutationRequest = User
export type UpdateUserMutationResponse = any
export type UpdateUserMutation = {
  Response: UpdateUserMutationResponse
  Request: UpdateUserMutationRequest
  PathParams: UpdateUserPathParams
}
