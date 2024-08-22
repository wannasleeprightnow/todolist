import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Input from "../Input/Input";
import classes from "./SignUpForm.module.css";

export default function SignUpForm() {
  const navigate = useNavigate();
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [isValid, setIsValid] = useState(false);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setIsValid(
      signUpForm.email !== "" &&
      signUpForm.username !== "" &&
      signUpForm.password !== ""
    );
  }, [signUpForm]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({ ...prev, email: event.target.value }));
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({ ...prev, username: event.target.value }));
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({ ...prev, password: event.target.value }));
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const fetchWithDelay = async () => {
    try {
      // Задержка перед отправкой запроса
      await delay(1000); // Задержка на 5 секунд

      const response = await fetch('http://localhost/api/v1/auth/sign_up', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpForm)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log('Success:', data);
      navigate("/sign-in"); // Перенаправление после успешной регистрации
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
    if (isValid) {
      setLoading(true);
      fetchWithDelay();
    }
  };

  return (
    <form className={classes.sign_up_form} onSubmit={handleSubmit}>
      <Input
        type="email"
        value={signUpForm.email}
        placeholder="Email"
        onChange={handleEmailChange}
        required
      />
      <Input
        type="text"
        value={signUpForm.username}
        placeholder="Username"
        onChange={handleUsernameChange}
        required
      />
      <Input
        type="password"
        value={signUpForm.password}
        placeholder="Password"
        onChange={handlePasswordChange}
        required
      />
      <Button type="submit" disabled={!isValid || isLoading}>
        Sign Up
      </Button>
    </form>
  );
}