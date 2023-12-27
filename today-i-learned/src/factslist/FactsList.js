import { useEffect } from "react";

import Fact from "./Fact.js";
import Loader from '../Loader';


loadFacts();

async function loadFacts() {
    const res = await fetch(
        "https://cors-anywhere.herokuapp.com/https://cleaiojocybgxbxhrzqx.supabase.co/rest/v1/facts",
        {
        headers: {
            apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZWFpb2pvY3liZ3hieGhyenF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNDI1MjUsImV4cCI6MjAxNjgxODUyNX0.BKnOlOS283NiNAWjwTlD9CUGJpixu6BUTpjl2qSLgvc",
            authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNsZWFpb2pvY3liZ3hieGhyenF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNDI1MjUsImV4cCI6MjAxNjgxODUyNX0.BKnOlOS283NiNAWjwTlD9CUGJpixu6BUTpjl2qSLgvc",
        },
        }
    );
    // const data = await res.json();
}

function FactsList({ isLoading, factList }) {

    if (factList.length == 0) {
        return (
            <p className="message">
                No facts for this category yet! Create the first one :) 
            </p>)
    }

    return (
        isLoading ? <Loader /> :
        <section>
            <ul className="facts-list">
                {
                    // show all facts if no category filter selected, or filter facts based on selected category
                    factList.map((fact) => <Fact factObj={fact}/>)
                }
            </ul>
            <p>
                There are {factList.length} facts in the database. Add your own!
            </p>
        </section>
    );
}

export default FactsList;