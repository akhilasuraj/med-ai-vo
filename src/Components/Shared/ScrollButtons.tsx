import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface ScrollButtonsProps {
    scrollContainerId: string;
    className?: string;
}

const ScrollButtons: React.FC<ScrollButtonsProps> = ({ scrollContainerId, className = '' }) => {
    const scroll = (direction: 'left' | 'right') => {
        const container = document.getElementById(scrollContainerId);
        if (container) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors backdrop-blur-sm"
                aria-label="Scroll left"
            >
                <ChevronLeftIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
            <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-md hover:bg-white dark:hover:bg-gray-800 transition-colors backdrop-blur-sm"
                aria-label="Scroll right"
            >
                <ChevronRightIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </button>
        </div>
    );
};

export default ScrollButtons;