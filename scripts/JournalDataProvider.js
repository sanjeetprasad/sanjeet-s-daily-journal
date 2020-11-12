let journal = []
let moods = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) => {
            // console.log(currentEntry, currentEntry.date)
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        })
    return sortedByDate
}

export const getJournal = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedJournal => {
            // console.log(parsedJournal)
            // What should happen when we finally have the array?
            journal = parsedJournal
        })
}

export const getMoods = () => {
    return fetch ("http://localhost:8088/moods")
    .then(res => res.json())
    .then(parsedMood => {
        moods = parsedMood
    })
}

export const useMoods = () => {
    return moods.slice()
}