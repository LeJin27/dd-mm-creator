
export interface Mob {
  id: string
  name: string
  size: number
  image?: string
  description?: string
}

export interface NewMob {
  name?: string
  size?: number
  image?: string
  description?: string
}
