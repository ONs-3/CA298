import React, { useState } from 'react';

function NewDegree() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/degree/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description }),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  }

  return (
    <div>
      <h1>New Degree</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <button type="submit">Create Degree</button>
      </form>
    </div>
  );
  }

  export default NewDegree;
