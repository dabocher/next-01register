// BASIC REGISTER PAGE WITHOUT STATE

import Link from "next/link";
import RegisterForm from "../component/Form/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center gap-4 w-3/4">
      <h1 className="rounded-md w-3/5 px-10 py-2 font-bold text-3xl bg-slate-700 text-white text-center">
        Página de registro
      </h1>
      <RegisterForm />
      <Link href="/login" className="text-red-600 text-lg font-bold">
        ¿Tienes cuenta? Inicia sesión
      </Link>
    </div>
  );
};

export default RegisterPage;
