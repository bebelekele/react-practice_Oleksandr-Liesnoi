/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react';
import './App.scss';

import { ProductTable } from './components/ProductTable';
import { Filters } from './components/Filters';
import { Categories } from './components/Categories';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

let chosedFilters = [];

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(
    categoryServer => categoryServer.id === product.categoryId,
  );
  const user = usersFromServer.find(
    userServer => userServer.id === category.ownerId,
  );

  return { product, category, user };
});

function sortProducts(p, chosenUser, chosedFilters, query) {
  let res = [...p];

  if (query) {
    res = res.filter(prepProduct => {
      return prepProduct.product.name
        .toLowerCase()
        .includes(query.toLowerCase().trim());
    });
  }

  if (chosenUser) {
    res = res.filter(prepProduct => prepProduct.user.name === chosenUser);
  }

  if (chosedFilters.length !== 0) {
    res = res.filter(prepProduct =>
      chosedFilters.includes(prepProduct.category.title),
    );
  }

  return res;
}

export const App = () => {
  const [chosenUser, setUser] = useState('');
  const [query, setQuery] = useState('');
  const [chosenFilter, setFilter] = useState('');

  if (chosenFilter === '') {
    chosedFilters = [];
  } else if (chosedFilters.includes(chosenFilter)) {
    const index = chosedFilters.indexOf(chosenFilter);

    chosedFilters.splice(index, 1);
  } else {
    chosedFilters.push(chosenFilter);
  }

  const sortedProducts = sortProducts(
    products,
    chosenUser,
    chosedFilters,
    query,
  );

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <Filters
              users={usersFromServer}
              chosenUser={chosenUser}
              setUser={setUser}
            />

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  value={query}
                  onChange={event => {
                    setQuery(event.target.value);
                  }}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>
                {query !== '' ? (
                  <span className="icon is-right">
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <button
                      data-cy="ClearButton"
                      type="button"
                      className="delete"
                      onClick={() => setQuery('')}
                    />
                  </span>
                ) : (
                  ''
                )}
              </p>
            </div>
            <Categories
              categories={categoriesFromServer}
              chosenFilter={chosenFilter}
              chosedFilters={chosedFilters}
              setFilter={setFilter}
              setUser={setUser}
            />
          </nav>
        </div>

        <div className="box table-container">
          {sortedProducts.length === 0 ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <ProductTable sortedProducts={sortedProducts} />
          )}
        </div>
      </div>
    </div>
  );
};
