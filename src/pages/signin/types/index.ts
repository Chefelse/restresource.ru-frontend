interface User {
  id: number
  email: string
  password: string
  name: string
  lastname: string
  token: string
  roles: Array<Roles>
  image: string
  link: string
  status: boolean
  created_at: string
  updated_at: string
}

interface Roles {
  id: number
  name: string
}

interface Guest {
  email: string | null
  password: string | null
}

export type { Guest, Roles, User }
