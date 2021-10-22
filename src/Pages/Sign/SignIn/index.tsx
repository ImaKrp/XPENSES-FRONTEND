import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Input,
  InputDiv,
  Label,
  SpanError,
  SubmitBtn,
  Title,
} from "./style";
import { useSession } from "../../../hooks/useSession";

export const SignIn: React.FC = () => {
  useEffect(() => {
    document.title = "XPENSE Sing In";
  }, []);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { signIn } = useSession();
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

    const resp = await signIn(email, password);
    if (resp) {
      if (resp === "email") setEmailError("⨉ E-mail not registered.");
      if (resp === "password") setPasswordError("⨉ Wrong password.");
    }
  };
  return (
    <Container>
      <Title>Try a new way to manage your money.</Title>
      <Card onSubmit={(e) => handleSubmit(e)}>
        <InputDiv>
          <Label>E-mail address</Label>
          <Input
            isOnError={emailError}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="Input your e-mail adress."
            type="email"
            required
          />
          {emailError && <SpanError>{emailError}</SpanError>}
        </InputDiv>
        <InputDiv>
          <Label>Password</Label>
          <Input
            isOnError={passwordError}
            value={password}
            onChange={(e) => handlePasswordChange(e.target.value)}
            placeholder="Input your password."
            type="password"
            required
          />
          {passwordError && <SpanError>{passwordError}</SpanError>}
        </InputDiv>
        <SubmitBtn type="submit">Sign In</SubmitBtn>
      </Card>
    </Container>
  );
};
