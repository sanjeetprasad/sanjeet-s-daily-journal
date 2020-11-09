/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getJournal } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getJournal().then(() => {

        const entries = useJournalEntries()

        render(entries)

    })
}
    
const render = (entries) => {
    let journalEntryHTML = ""
    for (const entry of entries) {
        journalEntryHTML = JournalEntryComponent(entry)
        entryLog.innerHTML += journalEntryHTML
    }
}
