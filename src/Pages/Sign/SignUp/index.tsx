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

export const SignUp: React.FC = () => {
  useEffect(() => {
    document.title = "XPENSE Sing Up";
  }, []);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifyEmailError, setVerifyEmailError] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [verifyPasswordError, setVerifyPasswordError] = useState("");
  const { signUp } = useSession();

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(value ? "" : "⨉ Input your e-mail address.");
    if (!verifyEmail) return;
    setVerifyEmailError(
      value
        ? value === verifyEmail
          ? ""
          : "⨉ The e-mail addresses are't the same."
        : "⨉ Verify your e-mail."
    );
  };

  const handleVerifyEmailChange = (value: string) => {
    setVerifyEmail(value);
    setVerifyEmailError(
      value
        ? value === email
          ? ""
          : "⨉ The e-mail addresses are't the same."
        : "⨉ Verify your e-mail."
    );
  };

  const handleVerifyPasswordChange = (value: string) => {
    setVerifyPassword(value);
    setVerifyPasswordError(
      value
        ? value === password
          ? ""
          : "⨉ The passwords are't the same."
        : "⨉ Verify your password."
    );
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError(value ? "" : "⨉ Input your password.");
    if (!verifyPassword) return;
    setVerifyPasswordError(
      value
        ? value === verifyPassword
          ? ""
          : "⨉ The passwords are't the same."
        : "⨉ Verify your password."
    );
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

    const resp = await signUp(email, password);
    if (resp) {
      if (resp === "email") setEmailError("⨉ E-mail already registered.");
    }
  };
  return (
    <Container>
      <Title>Get away from the paper n' pen.</Title>
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
          <Label>Verify e-mail address</Label>
          <Input
            isOnError={verifyEmailError}
            value={verifyEmail}
            onChange={(e) => handleVerifyEmailChange(e.target.value)}
            placeholder="Input your e-mail adress again."
            type="email"
            required
          />
          {verifyEmailError && <SpanError>{verifyEmailError}</SpanError>}
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
        <InputDiv>
          <Label>Verify password</Label>
          <Input
            isOnError={verifyPasswordError}
            value={verifyPassword}
            onChange={(e) => handleVerifyPasswordChange(e.target.value)}
            placeholder="Input your password again."
            type="password"
            required
          />
          {verifyPasswordError && <SpanError>{verifyPasswordError}</SpanError>}
        </InputDiv>
        <SubmitBtn type="submit">Sign Up</SubmitBtn>
      </Card>
    </Container>
  );
};
