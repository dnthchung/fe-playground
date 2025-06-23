// src/app/models/user.ts

export interface Address {
  street: string
  city: string
  country: string
  zipCode: string
}

export interface User {
  id: number
  email: string
  username: string
  password?: string // Mật khẩu thường không nên được gửi về client
  firstName: string
  lastName: string
  role: "admin" | "customer"
  avatar: string
  phone: string
  address: Address
  createdAt: string
  isActive: boolean
}
