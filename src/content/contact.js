import React from 'react';
import { useState, useEffect } from 'react';
import NewContact from './newcontact.js';

export default function Contact() {
  const [contact, setContact] = useState([]);
  const getContact = async () => {
    const res = await fetch('https://reqres.in/api/users/');
    console.log(res);
    const json = await res.json();
    console.log(json.data);
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

  return (
    <>
      <h1 className="center">Contact Bloger</h1>
      <div className="newContact">
        <button>New Contact</button>
      </div>
      <NewContact onAdd={onAdd} />
      <div className="flex-contact">
        {contact.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.first_name}</strong>
              </p>
              <p>{user.email}</p>
              <img key={user.avatar} src={user.avatar} />
            </div>
          );
        })}
      </div>
    </>
  );
}
