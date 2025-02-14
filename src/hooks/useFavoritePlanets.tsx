import { create } from 'zustand'

interface FavoritesState {
    favorites: string[]
    toggleFavorite: (planet: string) => void
}

// Create a Zustand store for managing favorite planets
const useFavoritesStore = create<FavoritesState>((set) => ({
    favorites: [],
    // Function to toggle a planet's favorite status
    toggleFavorite: (planet) =>
        set((state) => {
            // Check if the planet is already in the favorites list
            const isFavorite = state.favorites.includes(planet)

            // Update the favorites array: remove if already a favorite, otherwise add it
            const updatedFavorites = isFavorite
                ? state.favorites.filter((fav) => fav !== planet)
                : [...state.favorites, planet]

            // Persist the updated favorites array in localStorage
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites))

            // Update the Zustand store state with the new favorites array
            return { favorites: updatedFavorites }
        }),
}))

export const initializeFavorites = () => {
    // Retrieve the stored favorites from localStorage, or set it to an empty array if not found
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    // Update the Zustand store state with the retrieved favorites
    useFavoritesStore.setState({ favorites: storedFavorites })
}

export default useFavoritesStore
