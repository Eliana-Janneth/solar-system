import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Option {
    value: string;
    label: string;
}

interface DropdownProps {
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function Dropdown({ options, value, onChange, className }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = options.find((option) => option.value === value);

    const handleSelect = (value: string) => {
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className={`relative ${className}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 bg-gray-300 rounded-2xl text-gray-600 w-48 text-left flex items-center justify-between outline-none text-sm"
            >
                <span>{selectedOption?.label || 'Select an option'}</span>
                {isOpen ? <ChevronUp className="w-4 h-4 text-gray-600" /> : <ChevronDown className="w-4 h-4 text-gray-600" />}
            </button>

            {isOpen && (
                <ul className="absolute top-full left-0 w-48 bg-white border border-gray-300 rounded-2xl shadow-md z-10 text-sm">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className="p-2 text-gray-600 hover:bg-gray-200 cursor-pointer rounded-2xl"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
