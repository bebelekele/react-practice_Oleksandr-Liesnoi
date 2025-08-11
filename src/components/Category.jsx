export const Category = ({ category }) => (
  <a data-cy="Category" className="button mr-2 my-1" href="#/">
    {category.title}
  </a>
);
