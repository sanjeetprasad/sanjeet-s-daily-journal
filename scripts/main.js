// console.log("Welcome to the main module")
// import { useJournalEntries} from './JournalDataProvider.js';

// const journalEntries = useJournalEntries()

// console.log(journalEntries)

import { EntryListComponent } from "./JournalEntryList.js"
import {getJournal} from "./JournalDataProvider.js"
import {JournalFormComponent} from "./form/JournalForm.js"

JournalFormComponent()

EntryListComponent();

getJournal()


