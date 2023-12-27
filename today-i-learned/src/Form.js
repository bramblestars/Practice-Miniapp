import { useState } from "react";
import { CATEGORIES } from "./Constants.js";

import supabase from './supabase';

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

function Form({ setShowForm, setFactFn, currentCategory }) {
    const [text, setText] = useState("");
    const [source, setSource] = useState("");
    const [category, setCategory] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    async function handleSubmit(e) {
        // Prevent browser reload
        e.preventDefault();

        if (isValidForm(text, source, category)) {

            setIsUploading(true);

            const { data: newFact, error} = await supabase
                .from("facts")
                .insert([{text, source, category}])
                .select();

            if (category == currentCategory && !error) {
                setFactFn((facts) => [newFact[0], ...facts]);
            }
        
            // Reset input fields
            setText("");
            setSource("");
            setCategory("");
            setIsUploading(false);

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
            onChange={(e) => setText(e.target.value)}
            disabled={isUploading}/>
        <span>{200 - text.length}</span>
        <input 
            type="text" 
            placeholder="Trustworthy source..." 
            value={source}
            onChange={(e) => setSource(e.target.value)}
            disabled={isUploading}/>
        <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disabled={isUploading}>
          <option value="">Choose category:</option>
          { Object.keys(CATEGORIES).map((cat) => 
            <option value={cat}>{cat[0].toUpperCase() + cat.slice(1)}</option>)}
        </select>
        <button className="btn btn-large" onClick={handleSubmit} diabled={isUploading}>Post</button>
      </form>
    );
}

export default Form;