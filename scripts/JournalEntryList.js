/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries, getJournal } from "./JournalDataProvider.js"
import {JournalHtmlCard} from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const journalContainer = document.querySelector(".entryLog")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    getJournal()
    .then(() => {

        const entries = useJournalEntries()

        render(entries)

    })
}
    
const render = (journalArray) => {
    let journalEntryHTML = ""
    for (const journal of journalArray) {
        journalEntryHTML += JournalHtmlCard(journal)
        
    }
    journalContainer.innerHTML = `
       <div class="journal__card">
        <h3> My Journal Entry </h3>
        ${journalEntryHTML}
        </div>
    `
}
