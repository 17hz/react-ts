import client from '@/client'
import type { ResponseConfig } from '@/client'
import type { LogoutUserQueryResponse } from '../../models/LogoutUser'

/**
 * @summary Logs out current logged in user session
 * @link /user/logout
 */
export async function logoutUser(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<LogoutUserQueryResponse>['data']> {
  const res = await client<LogoutUserQueryResponse>({
    method: 'get',
    url: `/user/logout`,
    ...options,
  })
  return res.data
}
