import React, { useState } from 'react';

export default function Update({
  id,
  first_name,
  email,
  avatar,
  onEdit,
  onDelete,
}) {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <div>
            Name :
            <input placeholder="Name" name="name" defaultValue={first_name} />
          </div>
          <div>
            Email :
            <input placeholder="Email" name="email" defaultValue={email} />
          </div>
          <div>
            <button onSubmit={handleOnEditSubmit}>Save</button>
          </div>
        </form>
      ) : (
        <div key={id}>
          <p>
            <strong>{first_name}</strong>
          </p>
          <p>{email}</p>
          <img key={avatar} src={avatar} />
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}
