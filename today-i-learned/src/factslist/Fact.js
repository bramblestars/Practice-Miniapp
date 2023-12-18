
import { CATEGORIES } from "../Constants.js";

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