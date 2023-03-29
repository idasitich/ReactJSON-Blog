import React from 'react';
import { useState, useEffect } from 'react';

export default function Blog() {
  const [blog, setBlog] = useState([]);
  const getBlog = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    console.log(res);
    const data = await res.json();
    console.log(data);
    setBlog(data);
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <div className="flex">
        {blog.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <strong>{user.title}</strong>
              </p>
              <p>{user.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
