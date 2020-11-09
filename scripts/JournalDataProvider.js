let journal = []

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
            console.log(parsedJournal)
            // What should happen when we finally have the array?
            journal = parsedJournal
        })
}

// export const useNotes = () => {
//     return notes.slice()
// }

// export const saveJournal = (note) => {
//     return fetch('http://localhost:8088/entries', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(note)
//     })
//     .then(getNotes)
//     .then(dispatchStateChangeEvent)
// }