import React from 'react';
import User from './User';
import useGetAllUsers from '../../context/useGetAllUsers';

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div>
      <h1 className="px-8 py-6 text-white font-bold text-2xl rounded-md">
        Messages
      </h1>
      <div
        className="py-2 flex-1 overflow-y-auto"
        style={{ maxHeight: 'calc(84vh - 10vh)' }}
      >
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;
