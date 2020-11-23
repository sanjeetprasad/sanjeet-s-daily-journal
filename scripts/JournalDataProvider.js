
const eventHub = document.querySelector(".container")

let journal = []

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/


export const getJournal = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(parsedJournal => {
            // console.log(parsedJournal)
            // What should happen when we finally have the array?
            journal = parsedJournal
        })
}

export const useJournalEntries = () => {
    let sortedByDate = journal.slice
    sortedByDate = journal.sort(
        (currentEntry, nextEntry) => {
            // console.log(currentEntry, currentEntry.date)
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
        })
    return sortedByDate
}

export const saveJournal = (entryObj) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(getJournal)
    .then(dispatchStateChangeEvent)

}

const dispatchStateChangeEvent = () => {
    const journalStateChangedEvent = new CustomEvent("journalStateChanged")

    eventHub.dispatchEvent(journalStateChangedEvent)
}
