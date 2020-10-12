const journal = [
    {
        id: 1,
        date: "09/29/2020",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "09/30/2020",
        concept: "Complex Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "10/1/2020",
        concept: "Martins Aquarium",
        entry: "We talked about martins Aquarium and made all the js file I am very exiceted to learn new thing everyday.",
        mood: "happy"
    },
    {
        id: 4,
        date: "10/2/2020",
        concept: "Martins Aquarium",
        entry: "We made the html part of martins aquarium with the help of js, that was real fun I loving it.",
        mood: "happy"
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}