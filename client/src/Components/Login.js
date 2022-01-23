import { useState } from "react";
import AuthForm from "./Helpers/AuthForm";

function Login() {
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
      buttonText="login"
      onSubmit={onSubmit}
    />
  );
}

export default Login;
