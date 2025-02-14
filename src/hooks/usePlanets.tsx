import { useQuery } from '@tanstack/react-query'

import { getPlanets, getPlanetByName } from '@services/planet.service'

export const QueryPlanetByName = (name: string) => {
    return useQuery({
        queryKey: ['planet', name],
        queryFn: () => getPlanetByName(name),
    })
}

export const QueryPlanets = () => {
    return useQuery({
        queryKey: ['planets'],
        queryFn: getPlanets,
    })
}
