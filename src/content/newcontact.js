import React from 'react';
import { useState } from 'react';

export default function newContact({ onAdd }) {
  const [image, setImage] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value, image);
    e.target.name.value = '';
    e.target.email.value = '';
  };
  const handleUploadImage = (e) => {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          Name : <input name="name" />
        </div>
        <div>
          Email : <input name="email" />
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
        <div className="save">
          <button onSubmit={handleSubmit}>Save</button>
        </div>
      </form>
    </>
  );
}
