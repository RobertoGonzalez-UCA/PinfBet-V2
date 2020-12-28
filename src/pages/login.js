import React from "react";
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

export default function Login() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        "background-image":
          "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)"
      }}
    >
      <section className="flex items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="w-96 bg-gray-100 rounded-lg p-8 flex flex-col">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Inicia sesión
          </h2>
          <div className="relative mb-2">
            <Label
              for="email"
              className="leading-7 text-sm text-gray-600"
              text="Email"
            />
            <Input
              type="email"
              id="email"
              name="email"
              className="w-full"
            />
          </div>
          <div className="relative mb-3">
            <Label
              for="password"
              className="leading-7 text-sm text-gray-600"
              text="Contraseña"
            />
            <Input
              type="password"
              id="p"
              name="email"
              className="w-full"
            />
          </div>
          <a
            className="mb-2 flex justify-center text-xs text-blue-400 hover:underline"
            href="./profile.js"
          >
            ¿Has olvidado la contraseña?
          </a>
          <Button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Entrar
          </Button>
        </div>
      </section>
    </div>
  );
}
