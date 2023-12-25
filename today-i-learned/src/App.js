import { useState } from 'react'
import Header from "./Header.js";
import CategoryFilter from "./CategoryFilters.js";
import Form from "./Form.js";
import FactsList from "./factslist/FactsList.js"
import "./style.css";

function App() {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <Header showFormFn={ () => setShowForm((show) => !show)}/>
            {showForm ? <Form /> : null}
            <main className="main">
                <CategoryFilter />
                <FactsList />
            </main>
            
        </>
    )
}

export default App;
