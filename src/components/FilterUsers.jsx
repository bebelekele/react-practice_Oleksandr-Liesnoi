import cn from "classnames";

export const FilterUsers = ({ user, chosenUser, setUser }) => (
  <a
    data-cy="FilterUser"
    href="#/"
    onClick={() => setUser(user.name)}
    className={cn({"is-active": chosenUser === user.name})}
  >
    {user.name}
  </a>
);
