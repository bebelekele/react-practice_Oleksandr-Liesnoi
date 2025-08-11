import cn from 'classnames';

export const Category = ({ category, chosedFilters, setFilter }) => (
  <a
    data-cy="Category"
    href="#/"
    className={cn('button mr-2 my-1', {
      'is-info':
        chosedFilters.includes(category.title) && chosedFilters.length !== 0,
    })}
    onClick={() => setFilter(category.title)}
  >
    {category.title}
  </a>
);
