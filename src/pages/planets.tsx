import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import PlanetCard from '@components/planetCard'
import { QueryPlanets } from '@hooks/usePlanets'
import LoadingSpinner from '@components/loadingSpinner'
import Pagination from '@components/pagination'
import { ITEMS_PER_PAGE } from '@/constants'
import { Search } from 'lucide-react'
import Dropdown from '@components/dropdown'
import NoResults from '@components/noResults'

const PlanetsList = () => {
    const router = useRouter()
    const { query } = router

    const initialSearchTerm = (query.search as string) || ''
    const initialSortOrder = (query.order as 'asc' | 'desc') || 'asc'
    const initialPage = parseInt(query.page as string) || 1

    const { data: dataPlanets, isLoading, error } = QueryPlanets()
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>(initialSortOrder)
    const [currentPage, setCurrentPage] = useState(initialPage)

    useEffect(() => {
        const params = {
            ...(searchTerm && { search: searchTerm }),
            ...(sortOrder && { order: sortOrder }),
            ...(currentPage > 1 && { page: currentPage.toString() }),
        }
        router.replace({ pathname: '/planets', query: params }, undefined, { shallow: true })
    }, [searchTerm, sortOrder, currentPage, router])

    const planetsMemoized = useMemo(() => {
        let filteredPlanets = dataPlanets?.filter((planet) =>
            planet.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        if (sortOrder === 'asc') {
            filteredPlanets = filteredPlanets?.sort((a, b) => a.name.localeCompare(b.name))
        } else {
            filteredPlanets = filteredPlanets?.sort((a, b) => b.name.localeCompare(a.name))
        }

        return filteredPlanets
    }, [dataPlanets, searchTerm, sortOrder])

    const paginatedPlanets = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
        const endIndex = startIndex + ITEMS_PER_PAGE
        return planetsMemoized?.slice(startIndex, endIndex)
    }, [planetsMemoized, currentPage])

    const handleCardClick = (planetName: string) => {
        router.push(`/planets/${planetName.toLowerCase()}`)
    }

    if (isLoading)
        return (
            <div className="flex items-center justify-center h-screen">
                <LoadingSpinner />
            </div>
        )
    if (error) return <p>Error loading planets: {error.message}</p>

    return (
        <div className="p-4 h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center">Solar System</h1>
            <div className="flex flex-row gap-4 mb-6 justify-center">
                <div className="flex items-center gap-2 bg-gray-300 rounded-2xl px-2 py-2 w-full sm:w-1/2">
                    <Search className="w-6 h-6 text-gray-500 bg-gray-400 rounded-2xl p-1" />
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 bg-transparent outline-none  text-gray-800"
                    />
                </div>

                <Dropdown
                    options={[
                        { value: 'asc', label: 'Sort A-Z' },
                        { value: 'desc', label: 'Sort Z-A' },
                    ]}
                    value={sortOrder}
                    onChange={(value) => setSortOrder(value as 'asc' | 'desc')}
                />
            </div>
            <div className="flex-1 items-center justify-center w-full p-2 overflow-y-auto h-[calc(100vh-200px)] scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-900">
                {paginatedPlanets && paginatedPlanets.length > 0 ? (
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
                            {paginatedPlanets.map((planet) => (
                                <PlanetCard
                                    key={planet.name}
                                    name={planet.name}
                                    tagLine={planet.tagline}
                                    tagLineIcon={planet.tagline_icon}
                                    onClickCard={() => handleCardClick(planet.name)}
                                    description={planet.description}
                                    texture={planet.textureUrl}
                                />
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 space-x-2">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={Math.ceil((planetsMemoized?.length || 0) / ITEMS_PER_PAGE)}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </div>
                ) : (
                    <NoResults message="Sorry, no planets match your search." />
                )}
            </div>
        </div>
    )
}

export default PlanetsList
