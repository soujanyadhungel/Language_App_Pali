import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { PaliWord } from '../types';
import { FlashCard } from './FlashCard';

interface FlashCardDeckProps {
  words: PaliWord[];
}

export function FlashCardDeck({ words }: FlashCardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === 0 ? words.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        onClick={handlePrevious}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <FlashCard
        word={words[currentIndex]}
        isFlipped={isFlipped}
        onFlip={() => setIsFlipped(!isFlipped)}
      />
      
      <button
        onClick={handleNext}
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
}