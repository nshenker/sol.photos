export type Trait = {
  type: string
  value: string
}

export type Transaction = {
  blockNumber: number
  date: string
  hash: string
}

export type NFT = {
  name: string
  collection: string
  description: string
  image: string
  tokenAddress: string
  traits: Trait[]
  provenance: Transaction[]
}

export type DropdownItemType = {
  title: string
  type: string
  price?: string
  image: string
  background?: string
}
