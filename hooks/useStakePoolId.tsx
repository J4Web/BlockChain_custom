import { tryPublicKey } from '@cardinal/namespaces-components'
import { stakePoolMetadatas } from 'api/mapping'
import { useRouter } from 'next/router'

export const useStakePoolId = () => {
  const {
    query: { stakePoolId },
  } = useRouter()
  const nameMapping = stakePoolMetadatas.find((p) => p.name === stakePoolId)
  const addressMapping = stakePoolMetadatas.find(
    (p) => p.stakePoolAddress.toString() === stakePoolId
  )
  const publicKey =
    nameMapping?.stakePoolAddress ||
    addressMapping?.stakePoolAddress ||
    tryPublicKey("Bce4Aq4YheBo5hENeoMhjywdvMhEMc8sUh21S87Qv4q6")

  return publicKey
}
