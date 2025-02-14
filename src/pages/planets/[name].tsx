import { useRouter } from 'next/router'
import Image from 'next/image'
import { QueryPlanetByName } from '@hooks/usePlanets'
import FavoriteToggle from '@components/favoriteToggle'
import { ArrowLeft } from 'lucide-react'
import LoadingSpinner from '@components/loadingSpinner'
import useFavoritesStore from '@hooks/useFavoritePlanets'
import { useEffect, useState } from 'react'

const PlanetDetail = () => {
    const router = useRouter()
    const { name } = router.query
    const { favorites, toggleFavorite } = useFavoritesStore()
    const [isFavorite, setIsFavorite] = useState(false)
    const { data: planet, isLoading, error } = QueryPlanetByName(name as string)

    useEffect(() => {
        if (typeof name === 'string') {
            setIsFavorite(favorites.includes(name.toLowerCase()))
        }
    }, [name, favorites])

    const handleToggleFavorite = () => {
        if (typeof name === 'string') {
            toggleFavorite(name)
        }
    }
    if (isLoading) return <LoadingSpinner />

    if (error || !planet) return <p>Planet not found.</p>

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900 max-h-[80vh]">
            <div className="relative w-full h-[50vh] md:h-[60vh]">
                <Image
                    src={planet.picture || '/default.png'}
                    alt="planet-name"
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                    className="rounded-lg shadow-md"
                />
            </div>
            <button
                onClick={() => router.push('/planets')}
                className="inline-flex absolute top-4 items-center px-4 py-2 bg-secondary self-start text-secondary-foreground rounded-md hover:bg-gray-700/40 focus:outline-none transition-colors duration-200"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Back</span>
            </button>
            <div className=" w-full max-w-4xl mt-8 px-4 text-center space-y-4">
                <div className="flex items-center justify-center gap-4 ">
                    <h1 className="text-5xl font-bold mb-4">{planet.name}</h1>
                    <FavoriteToggle initialState={isFavorite} onToggle={handleToggleFavorite} />
                </div>
                <p className="text-lg">{planet.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <p className="bg-gray-800 py-2 px-4 rounded-md">
                        <strong>Distance from Sun:</strong> {planet.distanceFromSun}
                    </p>
                    <p className="bg-gray-800 py-2 px-4 rounded-md">
                        <strong>Year Length:</strong> {planet.yearLength} days
                    </p>
                    <p className="bg-gray-800 py-2 px-4 rounded-md">
                        <strong>Number of Moons:</strong> {planet.numberOfMoons}
                    </p>
                    <p className="bg-gray-800 py-2 px-4 rounded-md">
                        <strong>Namesake:</strong> {planet.namesake}
                    </p>
                </div>
                <div className="flex justify-between mt-4 py-2"></div>
            </div>
        </div>
    )
}

export default PlanetDetail
