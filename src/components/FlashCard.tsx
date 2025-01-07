import React from 'react';
import type { PaliWord } from '../types';

interface FlashCardProps {
  word: PaliWord;
  isFlipped: boolean;
  onFlip: () => void;
}

export function FlashCard({ word, isFlipped, onFlip }: FlashCardProps) {
  return (
    <div
      className="w-full max-w-lg h-64 cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute w-full h-full bg-white rounded-lg shadow-lg p-6 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl font-bold mb-2">{word.transliteration}</h2>
            <p className="text-xl text-gray-600">{word.devanagari}</p>
          </div>
        </div>
        <div className="absolute w-full h-full bg-indigo-50 rounded-lg shadow-lg p-6 backface-hidden rotate-y-180">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl text-center">{word.translation}</p>
            <p className="text-sm text-gray-600 mt-4">{word.grammaticalDetails}</p>
          </div>
        </div>
      </div>
    </div>
  );
}