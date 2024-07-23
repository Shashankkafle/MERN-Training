import React from "react";

const Users = ({ id, studentName, subject }) => {
  return (
    <div>
      <h1>name: {studentName}</h1>
      <h1>id: {id}</h1>
      <h1>subject: {subject}</h1>
    </div>
  );
};

export default Users;
