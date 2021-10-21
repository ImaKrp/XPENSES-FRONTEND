import React, { useState } from "react";
import {
  Container,
  Card, 
  Input,
  InputDiv,
  Label,
  SpanError,
  SubmitBtn
} from "./style";


export const SignIn: React.FC = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Input your e-mail address.");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Input your password.");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let error = 0;

    if (!password) {
      setPasswordError("⨉ Input your password.");
      error++;
    }

    if (!email) {
      setEmailError("⨉ Input your e-mail address.");
      error++;
    }

    if (error > 0) return;

    const resp = ''
    if (resp) {
      if (resp === "email") setEmailError("⨉ E-mail não Cadastrado.");
      if (resp === "senha") setPasswordError("⨉ Senha incorreta.");
    }
  };
  return (
    <Container>
      <Card onSubmit={(e) => handleSubmit(e)}>
        <InputDiv>
        <Label>E-mail address</Label>
        <Input isOnError={emailError} value={email} onChange={(e) => handleEmailChange(e.target.value)} placeholder="Input your e-mail adress." />
        {emailError && <SpanError>{emailError}</SpanError>}
        </InputDiv>
        <InputDiv>
        <Label>Password</Label>
        <Input isOnError={passwordError} value={password} onChange={(e) => handlePasswordChange(e.target.value)} placeholder="Input your password." />
        {passwordError && <SpanError>{passwordError}</SpanError>}
        </InputDiv>
        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Card>
    </Container>
  );
};
