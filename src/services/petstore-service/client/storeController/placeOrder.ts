import client from '@/client'
import type { ResponseConfig } from '@/client'
import type {
  PlaceOrderMutationRequest,
  PlaceOrderMutationResponse,
} from '../../models/PlaceOrder'

/**
 * @description Place a new order in the store
 * @summary Place an order for a pet
 * @link /store/order
 */
export async function placeOrder(
  data?: PlaceOrderMutationRequest,
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<PlaceOrderMutationResponse>['data']> {
  const res = await client<
    PlaceOrderMutationResponse,
    PlaceOrderMutationRequest
  >({ method: 'post', url: `/store/order`, data, ...options })
  return res.data
}
