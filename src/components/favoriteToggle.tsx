"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface FavoriteToggleProps {
  initialState?: boolean
  onToggle?: (isFavorite: boolean) => void
}

export default function FavoriteToggle({ initialState = false, onToggle }: FavoriteToggleProps) {
  const [isFavorite, setIsFavorite] = useState(initialState)

  const handleToggle = () => {
    const newState = !isFavorite
    setIsFavorite(newState)
    if (onToggle) {
      onToggle(newState)
    }
  }

  return (
    <button
      onClick={handleToggle}
      className={`p-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
        isFavorite
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      }`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <Star className={`w-6 h-6 ${isFavorite ? "fill-current" : "stroke-current"}`} />
    </button>
  )
}

