import cn from 'classnames';

export const Category = ({ category, chosenFilter, setFilter }) => (
  <a
    data-cy="Category"
    href="#/"
    className={cn('button mr-2 my-1', {'is-info': chosenFilter === category.title})}
    onClick={() => setFilter(category.title)}
  >
    {category.title}
  </a>
);
