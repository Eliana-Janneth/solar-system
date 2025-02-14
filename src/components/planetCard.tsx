import useFavoritesStore from '@hooks/useFavoritePlanets'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface PlanetCardProps {
    name: string
    tagLine: string
    tagLineIcon: string
    onClickCard: () => void
    description: string
    texture?: string
}

export default function PlanetCard({ name, tagLine, tagLineIcon, onClickCard, description, texture }: PlanetCardProps) {
    const favorites = useFavoritesStore((state) => state.favorites);
    const isFavorite = favorites.includes(name.toLocaleLowerCase());

    return (
        <div
            className="p-4 bg-white rounded-lg border border-gray-100 shadow-sm max-w-md cursor-pointer transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-md"
            onClick={onClickCard}
        >
            <div className="relative w-full h-48 mb-4">
                <Image
                    src={texture || '/default-icon.png'}
                    alt={`${name} Texture`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                    {isFavorite && (
                    <div className="absolute top-2 right-2">
                        <Star className="w-6 h-6 text-yellow-700 bg-yellow-300 rounded-full p-1" />
                    </div>
                )}
            </div>
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                        <span className="font-medium bg-black rounded-full p-1">
                            <Image src={tagLineIcon || '/default-icon.png'} alt="Tagline Icon" width={30} height={24} />
                        </span>
                        <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
                    </div>

                    <span className="px-3 py-1 text-xs bg-blue-100 text-gray-700 rounded-full">{tagLine}</span>
                </div>

                <p className="text-gray-800 text-sm text-center text-ellipsis">
                    {description.length > 100 ? `${description.slice(0, 100)}...` : description}
                </p>
            </div>
        </div>
    )
}
