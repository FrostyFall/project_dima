import { useState, Dispatch, SetStateAction } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

type RegisterModalProps = {
  isActive: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  setLoginModalActive: Dispatch<SetStateAction<boolean>>;
};

interface IFormInput {
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function RegisterModal({
  isActive,
  setActive,
  setLoginModalActive,
}: RegisterModalProps) {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    if (password === passwordConfirm) {
      console.log(data);
      reset({ email: "", password: "", passwordConfirm: "" });
      setPassword("");
      setPasswordConfirm("");
      setActive(false);
    } else {
      alert("Пароли не совпадают");
    }
  };

  const modal = (
    <Modal
      onClick={() => {
        reset({ email: "", password: "", passwordConfirm: "" });
        setPassword("");
        setPasswordConfirm("");
        setActive(false);
      }}
    >
      <ModalForm
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className="title">Регистрация</p>
        <div className="container">
          <label htmlFor="email" className="text">
            Почта
          </label>
          <Input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "Неверный ввод",
              },
            })}
            id="email"
            autoComplete="off"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </div>
        <div className="container">
          <label htmlFor="password" className="text">
            Пароль
          </label>
          <Input
            {...register("password", {
              required: true,
              minLength: { value: 8, message: "Минимум 8 знаков" },
              maxLength: { value: 30, message: "Максимум 30 знаков" },
            })}
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </div>
        <div className="container">
          <label htmlFor="passwordConfirm" className="text">
            Подтвердить пароль
          </label>
          <Input
            {...register("passwordConfirm", {
              required: true,
              minLength: { value: 8, message: "Минимум 8 знаков" },
              maxLength: { value: 30, message: "Максимум 30 знаков" },
            })}
            id="passwordConfirm"
            autoComplete="off"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
        </div>
        <Submit type="submit" placeholder="Войти" />
        <div className="container center">
          <button
            className="container__btn"
            onClick={() => {
              reset({ email: "", password: "", passwordConfirm: "" });
              setPassword("");
              setPasswordConfirm("");
              setActive(false);
              setLoginModalActive(true);
            }}
          >
            Авторизация
          </button>
        </div>
      </ModalForm>
    </Modal>
  );

  return isActive ? modal : <div></div>;
}

const Modal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalForm = styled.form`
  width: 450px;
  height: 550px;
  padding: 30px 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 28px;

  .title {
    font-size: 32px;
    font-weight: bold;
  }
  .text {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  .container {
    display: flex;
    flex-direction: column;
  }
  .center {
    align-items: center;
  }
  .container__btn {
    background: none;
    border: none;
    font-size: 18px;
    color: #656565;

    &:hover {
      font-weight: bold;
    }
  }
`;
const Submit = styled.input`
  font-size: 30px;
  border: none;
  color: #fff;
  background: #0093d1;
  border-radius: 24px;
  width: 220px;
  height: 60px;

  &:hover {
    background: #00a2e8;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 5px 10px;
  font-size: 20px;
`;
const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
`;
