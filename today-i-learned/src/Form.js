import { useState } from "react";
import { CATEGORIES } from "./Constants.js";

function isValidHttpUrl(str) {
    let url;
    try {
        url = new URL(str);
        console.log(url);
    } catch (error) {
        return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
} 

function isValidForm(text, source, category) {
    return text && isValidHttpUrl(source) && category && text.length <= 200;
}

function Form({ setShowForm, setFactFn }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");

    function handleSubmit(e) {
        // Prevent browser reload
        e.preventDefault();

        if (isValidForm(text, source, category)) {
            // Create a new fact object
            const newFact = {
                id: Math.round(Math.random() * 10000),
                text: text,
                source: source,
                category: category,
                votesInteresting: 0,
                votesMindblowing: 0,
                votesFalse: 0,
                createdIn: new Date().getFullYear()
            }

            // Add new fact to the UI (add fact to state)
            setFactFn((facts) => [newFact, ...facts]);

            // Reset input fields
            setText("");
            setSource("");
            setCategory("");

            // Close the form
            setShowForm(false);
        }
        
    }

    return (
        <form className="fact-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder="Share a fact with the world..." 
            value={text}
            onChange={(e) => setText(e.target.value)}/>
        <span>{200 - text.length}</span>
        <input 
            type="text" 
            placeholder="Trustworthy source..." 
            value={source}
            onChange={(e) => setSource(e.target.value)}/>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
          <option value="">Choose category:</option>
          { Object.keys(CATEGORIES).map((cat) => 
            <option value={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>)}
        </select>
        <button className="btn btn-large" onClick={handleSubmit}>Post</button>
      </form>
    );
}

export default Form;