import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux";

const UserContainerHooks = () => {
  const { loading, users, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : error ? (
    <h2>{error}</h2>
  ) : (
    <div>
      <h2>User List</h2>
      <div>{users && users.map((user) => <p>{user.name}</p>)}</div>
    </div>
  );
};

export default UserContainerHooks;
