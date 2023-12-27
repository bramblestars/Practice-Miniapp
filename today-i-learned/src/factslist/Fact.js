import { useState } from "react";
import { CATEGORIES } from "../Constants.js";

import supabase from '../supabase';

function Fact(props) {
    const fact = props.factObj;
    const setFacts = props.setFacts;

    const [votesinteresting, setInteresting] = useState(fact.votesinteresting);
    const [votesmindblowing, setMindblowing] = useState(fact.votesmindblowing);
    const [votesfalse, setFalse] = useState(fact.votesfalse);
    const [isLoading, setIsLoading] = useState(false);

    async function handleInteresting() {
        setIsLoading(true);

        const {data: updatedFact, error} = await supabase
        .from('facts')
        .update({votesinteresting: fact.votesinteresting + 1})
        .eq("id", fact.id).select();

        if (!error) {
            setInteresting(votesinteresting + 1);
        }

        setIsLoading(false);
    }

    async function handleMindblowing() {
        setIsLoading(true);

        const {data: updatedFact, error} = await supabase
        .from('facts')
        .update({votesmindblowing: fact.votesmindblowing + 1})
        .eq("id", fact.id).select();

        if (!error) {
            setMindblowing(votesmindblowing + 1);
        }

        setIsLoading(false);
    }

    async function handleFalse() {
        setIsLoading(true);

        const {data: updatedFact, error} = await supabase
        .from('facts')
        .update({votesfalse: fact.votesfalse + 1})
        .eq("id", fact.id).select();

        if (!error) {
            setFalse(votesfalse + 1);
        }

        setIsLoading(false);
    }

    return (<li key={fact.id} className="fact">
                <p>
                    {fact.text}
                <a
                    className="source"
                    href={fact.source}
                    target="_blank"
                    >(Source)</a
                >
                </p>
                <span className="tag" style={{ backgroundColor: CATEGORIES[fact.category] }}>
                    {fact.category}
                </span>
                <div className="vote-buttons">
                    <button onClick={handleInteresting} disabled={isLoading}>👍 {votesinteresting}</button>
                    <button onClick={handleMindblowing} disabled={isLoading}>🤯 {votesmindblowing}</button>
                    <button onClick={handleFalse} disabled={isLoading}>⛔️ {votesfalse}</button>
                </div>
            </li>)
}

export default Fact;