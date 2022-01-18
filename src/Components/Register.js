import { useState } from "react";
import AuthForm from "./Helpers/AuthForm";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    console.log(email, password);
  };

  return (
    <AuthForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      buttonText="sign up"
      onSubmit={onSubmit}
    />
  );
}

export default Register;
