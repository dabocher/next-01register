// BASIC REGISTER PAGE WITHOUT STATE MANAGEMENT

"use client";

import { FormEvent } from "react";

const onSubmitHander = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const { username, email, password } = event.currentTarget;
  const response = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username.value,
      email: email.value,
      password: password.value,
    }),
  });

  if (response.status !== 201) {
    console.log("something went wrong");
    throw new Error("something went wrong");
  }
  response.status === 201 && console.log("user created");
};

const RegisterPage = () => {
  return (
    <>
      <div className="text-center">RegisterPage</div>
      <form
        onSubmit={onSubmitHander}
        className="flex flex-col items-center gap-4 w-3/4"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="form-group flex flex-col gap-1">
            <label htmlFor="username">Usuaria / o</label>
            <input
              type="text"
              className="border-2 border-black rounded-md px-4 form-control"
              id="username"
            />
          </div>
          <div className="form-group flex flex-col gap-1">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              className="border-2 border-black rounded-md px-4 form-control"
              id="email"
            />
          </div>
          <div className="form-group flex flex-col gap-1">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="border-2 border-black rounded-md px-4 form-control"
              id="password"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-2/5 bg-slate-600 text-white rounded-md px-4"
        >
          Crear cuenta
        </button>
      </form>
    </>
  );
};

export default RegisterPage;
