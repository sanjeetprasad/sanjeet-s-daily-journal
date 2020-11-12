

const formComponent = document.querySelector(".main__form")
export const JournalFormComponent = () => {
    
    render( )
}

const render = () => {
    // console.log("this is my form")
    formComponent.innerHTML = `
    <form action="">
    <fieldset>
            <label for="JournalDate">Date of entry</label>
            <input type="date" name="journalDate" id="journalDate">
            
        </fieldset>
        <fieldset>
            <label for="ConceptsCoverd">Concepts coverd</label>
            <input type="text" name="conceptscoverd" id="conceptscoverd">
            
        </fieldset>
        <fieldset>
            <label for="JournalEntry">Journal Entry</label>
            <input type="text" name="journalentry" id="journalentry">
            
        </fieldset>
        <fieldset>
            <label for="MoodfortheDay">Mood for the day</label>
            
            <select name="moodfortheday" id="moodfortheday">
                <option value="happy">Happy</option>
                <option value="ok">OK</option>
                <option value="sad">Sad</option>
                <option value="tired">Tired</option>
            </select>
        </fieldset>
        <button>Record journal entry</button>
        </form>
    `
}