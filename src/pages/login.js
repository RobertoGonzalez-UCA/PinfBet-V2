import React, { useState } from "react";

// COMPONENTS
import Label from "../components/label";
import Input from "../components/input";
import Button from "../components/button";

// FUNCTIONS
import { iniciarSesion } from "../db.js";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState(
    ""
  );
  const [
    password,
    setPassword
  ] = useState("");

  const loggedIn = false; // Hay que mirar el estado en Firebase

  return (
    <div>
      {!loggedIn && (
        <div
          className="bg-cover bg-center"
          style={{
            "background-image":
              "url(https://i.imgur.com/Hip5s6W.png)"
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
                  onChange={(ev) =>
                    setEmail(
                      ev.target.value
                    )
                  }
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
                  id="password"
                  name="password"
                  className="w-full"
                  onChange={(ev) =>
                    setPassword(
                      ev.target.value
                    )
                  }
                />
              </div>
              <a
                className="mb-2 flex justify-center text-xs text-blue-400 hover:underline"
                href="./profile.js"
              >
                ¿Has olvidado la
                contraseña?
              </a>
              <Button
                className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                onClick={() =>
                  iniciarSesion(
                    email,
                    password
                  )
                }
              >
                Entrar
              </Button>
            </div>
          </section>
        </div>
      )}
      {loggedIn && <Redirect to="/" />}
    </div>
  );
}
