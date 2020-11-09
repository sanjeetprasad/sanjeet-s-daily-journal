export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            
            <p>Date: ${entry.date}</p>
            <p>${entry.concept}</p>
            <p>${entry.entry}</p>
            <p>${entry.mood}</p>
            
            
        </section>
    `
}