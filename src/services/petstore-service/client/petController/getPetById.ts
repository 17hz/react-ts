import client from '@/client'
import type { ResponseConfig } from '@/client'
import type {
  GetPetByIdQueryResponse,
  GetPetByIdPathParams,
} from '../../models/GetPetById'

/**
 * @description Returns a single pet
 * @summary Find pet by ID
 * @link /pet/:petId
 */
export async function getPetById(
  petId: GetPetByIdPathParams['petId'],
  options: Partial<Parameters<typeof client>[0]> = {},
): Promise<ResponseConfig<GetPetByIdQueryResponse>['data']> {
  const res = await client<GetPetByIdQueryResponse>({
    method: 'get',
    url: `/pet/${petId}`,
    ...options,
  })
  return res.data
}
