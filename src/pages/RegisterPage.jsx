import { useState } from "react";

export const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.currentTarget.value);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.currentTarget.value);
  };
  const handleChangePassword = (e) => {
    e.preventDefault();
    setPassword(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post;
  };

  return (
    <>
      <p>Register</p>
      <form>
        <label>
          {" "}
          Username
          <input type="text" onChange={handleChangeName} value={name} />
        </label>
        <label>
          {" "}
          Email
          <input type="email" onChange={handleChangeEmail} value={email} />
        </label>
        <label>
          {" "}
          Password
          <input
            type="password"
            onChange={handleChangePassword}
            value={password}
          />
        </label>
        <button type="submit" onSubmit={handleSubmit}>
          Sign UP
        </button>
      </form>
    </>
  );
};
