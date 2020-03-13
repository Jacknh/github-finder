import React, { useContext } from "react";
import { Context } from '../../context'
import UserItem from "./UserItem";
import Spinner from '../layout/Spinner'

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

function Users() {
  const context = useContext(Context)

  if (context.loading) {
    return <Spinner />
  }
  
  return (
    <div style={userStyle}>
      {context.users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}


export default Users;
