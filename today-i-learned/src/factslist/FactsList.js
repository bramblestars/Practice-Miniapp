import Fact from "./Fact.js";





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

function FactsList({ initialFacts }) {
    const facts = initialFacts;

    return (
        <section>
            <ul className="facts-list">
                {
                    facts.map((fact) => <Fact factObj={fact}/>)
                }
            </ul>
            <p>There are {facts.length} facts in the database. Add your own!</p>
        </section>
    );
}

export default FactsList;