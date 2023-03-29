import React from 'react';
import { useState, useEffect } from 'react';

export default function Contact({ data }) {
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
  return (
    <>
      <h1 className="center">Contact Bloger</h1>
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
