import React, { createContext } from 'react';

const SearchContext = createContext({
    term: '',
    results: [],
    setTerm: () => {},
    setResults: () => {}
});

export default SearchContext;