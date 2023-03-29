import React from 'react';
import { useState, useEffect } from 'react';
import NewContact from './newcontact.js';
import Update from './update.js';

export default function Contact() {
  const [contact, setContact] = useState([]);

  const getContact = async () => {
    const res = await fetch('https://reqres.in/api/users/');
    const json = await res.json();
    setContact(json.data);
  };
  useEffect(() => {
    getContact();
  }, []);

  const onAdd = async (name, email) => {
    await fetch('https://reqres.in/api/users/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        first_name: name,
        email: email,
      }),
    })
      .then((response) => {
        if (response.status !== 201) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setContact((contact) => [...contact, data]);
        console.log(typeof data);
      })
      .catch((error) => console.log(error));
  };
  const onEdit = async (id, name, email) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        first_name: name,
        email: email,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          return response.json();
        }
      })
      .then((data) => {
        // setUsers((users) => [...users, data]);
        const updatedContact = contact.map((user) => {
          if (user.id === id) {
            user.first_name = name;
            user.email = email;
          }

          return user;
        });

        setContact(() => updatedContact);
      })
      .catch((error) => console.log(error));
  };
  const onDelete = async (id) => {
    await fetch(`https://reqres.in/api/users/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        console.log(id);
        setContact(
          contact.filter((user) => {
            return user.id !== id;
          })
        );
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="center">Contact Bloger</h1>
      <div className="newContact">
        <button>New Contact</button>
      </div>
      <NewContact onAdd={onAdd} />
      <div className="flex-contact">
        {contact.map((user) => (
          <Update
            id={user.id}
            key={user.id}
            first_name={user.first_name}
            email={user.email}
            avatar={user.avatar}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}
