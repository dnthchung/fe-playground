export const API_RESOURCES = {
  products: "products",
  users: "users",
  orders: "orders",
} as const

export type ApiResource = keyof typeof API_RESOURCES // 'products' | 'users' | 'orders'
