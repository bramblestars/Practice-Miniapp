import { useEffect, useState } from 'react'
import Header from "./Header";
import CategoryFilter from "./CategoryFilters";
import Form from "./Form";
import FactsList from "./factslist/FactsList"
import "./style.css";

import supabase from './supabase';

function App() {
    const [showForm, setShowForm] = useState(false);
    const [facts, setFacts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currCategory, setCurrCategory] = useState("");
    
    useEffect(function () {
        async function getFacts() {
            setIsLoading(true);

            let query = supabase.from("facts").select("*");

            if (currCategory)
            {
                query = query.eq("category", currCategory);
            }

            let { data: facts, error } = await query
            .order("votesinteresting", { ascending: false })
            .limit("50");

            if (!error) {
                setFacts(facts);
                setIsLoading(false);
            } 

            else {
                alert("There was a problem retrieving the data!");
            }
            
        }
        
        getFacts();
        
    }, [currCategory])

    return (
        <>
            <Header showFormFn={ () => setShowForm((show) => !show)}/>
            {showForm ? <Form setShowForm={setShowForm} setFactFn={setFacts} currentCategory={currCategory}/> : null}
            <main className="main">

                <CategoryFilter setCategory={setCurrCategory}/>
                <FactsList 
                    isLoading={isLoading}
                    factList={facts}
                    setFacts={setFacts}/>
                
            </main>
            
        </>
    )
}

export default App;
