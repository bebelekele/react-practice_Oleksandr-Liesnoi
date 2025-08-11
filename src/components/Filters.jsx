import cn from 'classnames';
import { FilterUsers } from './FilterUsers';

export const Filters = ({ users, chosenUser, setUser }) => (
  <>
    <p className="panel-heading">Filters</p>

    <p className="panel-tabs has-text-weight-bold">
      <a
        data-cy="FilterAllUsers"
        href="#/"
        onClick={() => setUser('')}
        className={cn({ 'is-active': chosenUser === '' })}
      >
        All
      </a>

      {users.map(user => (
        <FilterUsers
          user={user}
          chosenUser={chosenUser}
          setUser={setUser}
          key={user.id}
        />
      ))}
    </p>
  </>
);
