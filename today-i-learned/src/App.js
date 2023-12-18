import Header from "./Header.js";
import CategoryFilter from "./CategoryFilters.js";
import Form from "./Form.js";
import Fact from "./Fact.js";
import FactsList from "./FactsList.js"
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
