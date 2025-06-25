// src/app/models/product.model.ts

export interface ProductColor {
  name: string
  code: string
  image: string
}

export interface ProductSpecification {
  material: string
  fit: string
  care: string
  origin: string
}

export interface Product {
  id: number
  name: string
  slug: string
  description: string
  shortDescription: string
  sku: string
  categoryId: number
  brandId: number
  price: number
  originalPrice: number | null
  discount: number
  images: string[]
  thumbnail: string
  colors: ProductColor[]
  sizes: string[]
  stock: number
  rating: number
  reviewCount: number
  isNew: boolean
  isFeatured: boolean
  isActive: boolean
  tags: string[]
  specifications?: ProductSpecification
  createdAt: string // Hoặc kiểu Date
  updatedAt: string // Hoặc kiểu Date
}
