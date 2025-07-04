// src/app/models/review.ts

export interface Review {
  id: number
  productId: number
  userId: number
  rating: number
  comment: string
  createdAt: string
}
