import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1)
        }
    }

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1)
        }
    }

    return (
        <div className="flex items-center justify-center mt-6 space-x-4">
            <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full border ${
                    currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-lg font-semibold">
                {currentPage} / {totalPages}
            </span>

            <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full border ${
                    currentPage === totalPages
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
            >
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
    )
}
