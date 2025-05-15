'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Define the user type (customize as needed)
interface User {
  id: string
  name: string
  email: string
  image?: string
}

// Define the shape of the context
interface AuthContextType {
  user: User | null
  status: 'loading' | 'authenticated' | 'unauthenticated'
  setUser: (user: User | null) => void
}

// Create the context with a default value (cast to expected type)
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<'loading' | 'authenticated' | 'unauthenticated'>('loading')

  // Simulate auth logic (replace with real auth like Firebase or NextAuth)
  useEffect(() => {
    // Simulate checking user session
    const checkAuth = async () => {
      try {
        // Dummy delay
        await new Promise((res) => setTimeout(res, 1000))
        // Simulate user found
        const fakeUser = {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          image: 'https://i.pravatar.cc/150?img=3'
        }
        setUser(fakeUser)
        setStatus('authenticated')
      } catch (error) {
        setUser(null)
        setStatus('unauthenticated')
      }
    }

    checkAuth()
  }, [])

  return (
    <AuthContext.Provider value={{ user, status, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
