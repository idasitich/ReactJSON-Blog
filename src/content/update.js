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
  const [image, setImage] = useState([]);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };
  const handleOnEditSubmit = (evt) => {
    evt.preventDefault();
    onEdit(id, evt.target.name.value, evt.target.email.value, image);
    setIsEdit(!isEdit);
  };
  const handleDelete = () => {
    onDelete(id);
  };

  const handleUploadImage = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
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
            <input
              type="file"
              name="avatar"
              id="formFile"
              accept="image/*"
              onChange={handleUploadImage}
            />
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
