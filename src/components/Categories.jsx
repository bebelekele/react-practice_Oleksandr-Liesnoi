import { Category } from './Category';

export const Categories = ({ categories }) => (
  <>
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className="button is-success mr-6 is-outlined"
      >
        All
      </a>

      {categories.map(category => (
        <Category category={category} key={category.id} />
      ))}
    </div>
    <div className="panel-block">
      <a
        data-cy="ResetAllButton"
        href="#/"
        className="button is-link is-outlined is-fullwidth"
      >
        Reset all filters
      </a>
    </div>
  </>
);
