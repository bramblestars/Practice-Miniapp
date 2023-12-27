import { CATEGORIES } from "./Constants.js";

function CategoryFilter({ setCategory }) {
    let key = 0;
    return (
        <aside>
          <ul >
            <li className="category">
              <button 
                className="btn btn-all-categories" 
                onClick={() => setCategory("")}>
                All
              </button>
            </li>
            { Object.keys(CATEGORIES).map(function (cat) {
                    key++;
                    return (
                        <li className="category" key={key}>
                            <button
                                className="btn btn-category"
                                style={{ backgroundColor: CATEGORIES[cat] }}
                                onClick={() => setCategory(cat)}>
                            { cat }
                            </button>
                        </li>
                    )  
                })}
          </ul>
        </aside>
    );
}

export default CategoryFilter;