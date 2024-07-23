import client from '@/client'
import type { ResponseConfig } from '@/client'
import type { GetInventoryQueryResponse } from '../../models/GetInventory'

/**
 * @description Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 * @link /store/inventory
 */
export async function getInventory(
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetInventoryQueryResponse>['data']> {
  const res = await client<GetInventoryQueryResponse>({
    method: 'get',
    url: `/store/inventory`,
    ...options,
  })
  return res.data
}
