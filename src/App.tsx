import React, { useState } from 'react';
import { Book } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { FlashCardDeck } from './components/FlashCardDeck';
import { paliWords } from './data';

function App() {
  const [search, setSearch] = useState('');
  const [showFlashcards, setShowFlashcards] = useState(false);

  const filteredWords = paliWords.filter((word) => {
    const searchLower = search.toLowerCase();
    return (
      word.transliteration.toLowerCase().includes(searchLower) ||
      word.translation.toLowerCase().includes(searchLower) ||
      word.devanagari.includes(search)
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Book className="h-8 w-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">Pali Language Learning</h1>
          </div>
          <p className="text-gray-600">Discover the ancient language of Buddhist texts</p>
        </div>

        <div className="flex flex-col items-center gap-6 mb-8">
          <SearchBar value={search} onChange={setSearch} />
          <button
            onClick={() => setShowFlashcards(!showFlashcards)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            {showFlashcards ? 'Hide Flashcards' : 'Show Flashcards'}
          </button>
        </div>

        {showFlashcards ? (
          <div className="mb-12">
            <FlashCardDeck words={paliWords} />
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredWords.map((word) => (
              <div
                key={word.transliteration}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold">{word.transliteration}</h3>
                  <p className="text-gray-600">{word.devanagari}</p>
                </div>
                <p className="text-gray-800 mb-2">{word.translation}</p>
                <p className="text-sm text-gray-500">{word.grammaticalDetails}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;