import cn from 'classnames';
import { Category } from './Category';

export const Categories = ({
  categories,
  chosenFilter,
  chosedFilters,
  setFilter,
  setUser,
}) => (
  <>
    <div className="panel-block is-flex-wrap-wrap">
      <a
        href="#/"
        data-cy="AllCategories"
        className={cn('button is-success mr-6', {
          'is-outlined': chosenFilter !== '',
        })}
        onClick={() => setFilter('')}
      >
        All
      </a>

      {categories.map(category => (
        <Category
          category={category}
          key={category.id}
          chosenFilter={chosenFilter}
          chosedFilters={chosedFilters}
          setFilter={setFilter}
        />
      ))}
    </div>
    <div className="panel-block">
      <a
        data-cy="ResetAllButton"
        href="#/"
        className="button is-link is-outlined is-fullwidth"
        onClick={() => {
          setFilter('');
          setUser('');
        }}
      >
        Reset all filters
      </a>
    </div>
  </>
);
