
const CATEGORIES = {
    technology: "#3b82f6",
    science: "#16a34a",
    finance: "#ef4444",
    society: "#eab308",
    entertainment: "#db2777",
    health: "#14b8a6",
    history: "#f97316",
    news: "#8b5cf6"
}

function Fact(props) {
    const fact = props.factObj;
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
                <button>👍 {fact.votesInteresting}</button>
                <button>🤯 {fact.votesMindblowing}</button>
                <button>⛔️ {fact.votesFalse}</button>
                </div>
            </li>)
}

export default Fact;