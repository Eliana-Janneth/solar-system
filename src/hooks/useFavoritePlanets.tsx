import { create } from 'zustand';

interface FavoritesState {
    favorites: string[];
    toggleFavorite: (planet: string) => void;
}

const useFavoritesStore = create<FavoritesState>((set) => ({
    favorites: [], 
    toggleFavorite: (planet) =>
        set((state) => {
            const isFavorite = state.favorites.includes(planet);
            const updatedFavorites = isFavorite
                ? state.favorites.filter((fav) => fav !== planet)
                : [...state.favorites, planet];

            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return { favorites: updatedFavorites };
        }),
}));

export const initializeFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    useFavoritesStore.setState({ favorites: storedFavorites });
};

export default useFavoritesStore;
