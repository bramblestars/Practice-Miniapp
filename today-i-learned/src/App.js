import Header from "./Header.js";
import CategoryFilter from "./CategoryFilters.js";
import Form from "./Form.js";
import FactsList from "./factslist/FactsList.js"
import "./style.css";

function App() {
    return (
        <>
            <Header />
            <Form />
            <main className="main">
                <CategoryFilter />
                <FactsList />
            </main>
            
        </>
    )
}

export default App;
