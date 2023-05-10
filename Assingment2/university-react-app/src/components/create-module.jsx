import React, { useState } from "react";

const NewModule = () => {
  const [moduleCode, setModuleCode] = useState("");
  const [moduleName, setModuleName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to create a new module with the provided data
    fetch("/api/module/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: moduleCode,
        name: moduleName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Redirect to the newly created module's page
        window.location.href = `/module/${data.code}/`;
      });
  };

  return (
    <div>
      <h1>Create a New Module</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="moduleCode">Module Code:</label>
          <input
            type="text"
            id="moduleCode"
            name="moduleCode"
            value={moduleCode}
            onChange={(event) => setModuleCode(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="moduleName">Module Name:</label>
          <input
            type="text"
            id="moduleName"
            name="moduleName"
            value={moduleName}
            onChange={(event) => setModuleName(event.target.value)}
          />
        </div>
        <button type="submit">Create Module</button>
      </form>
    </div>
  );
};

export default NewModule;
