import { initializeFavorites } from '@hooks/useFavoritePlanets'
import '@styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient())

    useEffect(() => {
        initializeFavorites()
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
    )
}
