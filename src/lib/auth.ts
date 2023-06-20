import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {},
      async authorize(credentials): Promise<any> {
        const { userId, password } = credentials as ICredentialsValue
        try {
          const headers = new Headers()
          headers.append('Content-Type', 'application/json')

          const body: string = JSON.stringify({
            userId,
            password
          })

          const requestOptions: RequestInit = {
            method: 'POST',
            headers,
            body,
            redirect: 'follow',
            next: {
              revalidate: 60 * 60 * 1
            }
          }

          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            requestOptions
          )

          const {
            user: { name },
            token
          }: ILoginResponse = await response.json()

          return {
            name,
            token
          }
        } catch (error: any) {
          throw new Error('Usuário e/ou senha inválidos.')
        }
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token, user }) {
      session.user = token as any
      return session
    }
  },
  jwt: {
    maxAge: 60 * 60 * 1
  },
  secret: process.env.NEXTAUTH_SECRET
}
