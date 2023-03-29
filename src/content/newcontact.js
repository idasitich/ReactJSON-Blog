import React from 'react';
export default function newContact({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = '';
    e.target.email.value = '';
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
        <div className="save">
          <button onSubmit={handleSubmit}>Save</button>
        </div>
      </form>
    </>
  );
}
