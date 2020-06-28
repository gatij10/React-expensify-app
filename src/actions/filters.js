//Action generators for filters

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//sortby Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

//sortby amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

