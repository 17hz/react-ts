import client from '@/client'
import type { ResponseConfig } from '@/client'
import type {
  UpdateUserMutationRequest,
  UpdateUserMutationResponse,
  UpdateUserPathParams,
} from '../../models/UpdateUser'

/**
 * @description This can only be done by the logged in user.
 * @summary Update user
 * @link /user/:username
 */
export async function updateUser(
  username: UpdateUserPathParams['username'],
  data?: UpdateUserMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<UpdateUserMutationResponse>['data']> {
  const res = await client<
    UpdateUserMutationResponse,
    UpdateUserMutationRequest
  >({ method: 'put', url: `/user/${username}`, data, ...options })
  return res.data
}
