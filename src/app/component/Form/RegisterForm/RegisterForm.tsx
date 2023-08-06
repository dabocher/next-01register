"use client";
import createUser from "@/utils/createUser";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const onSubmitHander = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = event.currentTarget;
    const username = formData.username.value;
    const email = formData.email.value;
    const password = formData.password.value;
    const response = await createUser({ username, email, password });
    response.status === 201 && router.push("/");
  };
  return (
    <>
      <form
        onSubmit={onSubmitHander}
        className="flex flex-col items-center gap-6 w-3/5"
      >
        <div className="px-4 py-8 shadow-md rounded-md bg-zinc-100 w-full flex flex-col gap-4 items-center">
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold" htmlFor="username ">
              Usuaria / o
            </label>
            <input
              type="text"
              className="px-4 py-1 rounded-md "
              id="username"
              placeholder="Nombre de usuaria / o"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label className="font-bold" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="px-4 py-1   rounded-md"
              id="email"
              placeholder="Correo Electrónico"
            />
          </div>
          <div className="w-full  flex flex-col gap-1">
            <label className="font-bold" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              className="px-4 py-1 rounded-md"
              id="password"
              placeholder="Contraseña"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full shadow-md bg-blue-600 text-white rounded-md px-4 py-1"
        >
          Crear cuenta
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
