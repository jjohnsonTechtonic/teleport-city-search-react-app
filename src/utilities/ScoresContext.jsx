import React, { createContext } from 'react';

const ScoresContext = createContext({
    summary:'',
    categories:[],
    teleport_city_score: 0,
    setScoreDetails: () => {}
});

export default ScoresContext;