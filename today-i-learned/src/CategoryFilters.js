import { CATEGORIES } from "./Constants.js";

function CategoryFilter() {
    return (
        <aside>
          <ul >
            <li className="category">
              <button className="btn btn-all-categories">All</button>
            </li>
            { Object.keys(CATEGORIES).map((cat) => 
                <li className="category">
                    <button
                    className="btn btn-category"
                    style={{ backgroundColor: CATEGORIES[cat] }}
                    >
                    { cat }
                    </button>
                </li>)}
            
          </ul>
        </aside>
    );
}

export default CategoryFilter;