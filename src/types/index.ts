import type { ReactNode } from "react"

export interface Master {
  name: string
  specialty: string
  rating: number
  reviews: number
  avatar: string
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  showButton?: boolean
  buttonText?: string
  masters?: Master[]
}

export interface SectionProps extends Section {
  isActive: boolean
}