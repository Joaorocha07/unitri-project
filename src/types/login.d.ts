interface ISignInValues {
  userId: number
  password: string
}

interface ICredentialsValue {
  userId: number
  password: string
}

interface ILoginResponse {
  error: boolean
  status: string
  user: IUserData
  token: string
}

