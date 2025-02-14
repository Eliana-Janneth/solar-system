import { SearchX } from "lucide-react";

interface NoResultsProps {
    message?: string;
}

export default function NoResults({ message = "No results found" }: NoResultsProps) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full text-center">
        <SearchX className="w-16 h-16 text-gray-400 mb-4" />
        <p className="text-gray-600 text-lg">{message}</p>
    </div>
    );
}
