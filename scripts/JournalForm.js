import {saveJournal} from "./JournalDataProvider.js"


const contentTarget = document.querySelector(".main__form")
const eventHub = document.querySelector("#container")

// render the JournalForm on the DOM
export const JournalForm = () => {
    render()
}

const render = () => {
    console.log("this is my form")
    contentTarget.innerHTML = `
    <form action="" class="form__save">
    <fieldset>
            <label for="JournalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journal--date">
            
        </fieldset>
        <fieldset>
            <label for="ConceptsCoverd">Concepts coverd</label>
            <input type="text" name="conceptscoverd" id="journal--concept">
            
        </fieldset>
        <fieldset>
            <label for="JournalEntry">Journal Entry</label>
            <input type="text" name="journalentry" id="journal--entry">
            
        </fieldset>
        <fieldset>
            <label for="MoodfortheDay">Mood for the day</label>
            
            <select name="moodfortheday" id="journal--mood">
                <option value="happy">Happy</option>
                <option value="ok">OK</option>
                <option value="sad">Sad</option>
                <option value="tired">Tired</option>
            </select>
        </fieldset>
        <button id= "saveJournal">Record journal entry</button>
        </form>
    `
}


eventHub.addEventListener("click", clickEvent => {
    // grab the input values
    
    if(clickEvent.target.id === "saveJournal") {
        const date = document.querySelector("#journal--date").value
        const concept = document.querySelector("#journal--concept").value
        const entry = document.querySelector("#journal--entry").value
        const mood = document.querySelector("#journal--mood").value
        const timestamp = Date.now()
        // debugger

        

        const newJournal = {
            date,
            concept,
            entry,
            mood,
            timestamp
        }

        // send object to database/API/json file
        saveJournal(newJournal)
    }
})

