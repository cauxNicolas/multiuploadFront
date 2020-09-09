import React, { useState } from "react";
import axios from "axios";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [files, setFiles] = useState({});
  const [password, setPassword] = useState("");

  const handleSetName = (event) => {
    setName(event.target.value);
  };

  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSetFile = (event) => {
    //setFiles(event.target.files[0]); // pour un seul fichier
    setFiles(event.target.files);
  };

  const handleSetPassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    //formData.append("file", files);  // pour un seul fichier
    // stackoverflow
    for (let i = 0; i < files.length; i++) {
      formData.append(`images[${i}]`, files[i]); // pour plusieurs fichiers
    }
    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(
        "http://localhost:3001/user",

        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div id="user">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="nom"
          type="text"
          value={name}
          onChange={handleSetName}
        />
        <input
          placeholder="email"
          type="text"
          value={email}
          onChange={handleSetEmail}
        />
        {/* multiple permer de charger plusieurs fichiers */}
        <input type="file" onChange={handleSetFile} multiple />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={handleSetPassword}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default User;
