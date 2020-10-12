export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <p>Date: ${entry.date}</p>
            <p>${entry.entry}</p>
            
        </section>
    `
}