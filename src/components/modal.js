import React from "react";
import Input from "../components/input";
import Label from "../components/label";
import Select from "../components/select";
import Button from "../components/button";

import { iniciarCrearApuesta } from "../db";

export default function Modal({ nickname, uidApostado, subjectId }) {
  const [showModal, setShowModal] = React.useState(false);

  const handleSubmit = React.useCallback(async (event) => {
    event.preventDefault();
    const {
      firstBet,
      secondBet,
      cantFirstBet,
      cantSecondBet,
      betNotaCheck
    } = event.target.elements;

    iniciarCrearApuesta(
      cantFirstBet.value,
      cantSecondBet.value,
      uidApostado,
      firstBet.value,
      betNotaCheck.checked,
      secondBet.value,
      subjectId
    );
    window.setTimeout(function () {
      window.location.reload();
    }, 500);
  }, []);

  return (
    <>
      <button
        className="m-1 mr-3 bg-green-500 text-white font-semibold uppercase text-sm px-5 py-3 rounded hover:bg-green-600 outline-none focus:outline-none"
        type="button"
        style={{
          transition: "all .15s ease"
        }}
        onClick={() => setShowModal(true)}
      >
        Apostar
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Realiza una apuesta
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="relative flex justify-center">
                    <img
                      className="h-20"
                      src="https://i.imgur.com/q385Ahc.png"
                      alt="Avatar de usuario"
                    ></img>
                  </div>
                  <div className="pt-3 pb-7 relative flex justify-center">
                    <Label className="text-2xl">{nickname}</Label>
                  </div>
                  <div className="pb-10 relative flex justify-center"></div>

                  <form onSubmit={handleSubmit}>
                    <div className="mb-5 relative flex items-center">
                      <Label className="text-base mx-2">Aprueba/Suspende</Label>
                      <Select id="firstBet" className="mr-7">
                        <option value="true">Aprueba</option>
                        <option value="false">Suspende</option>
                      </Select>
                      <Label className="text-base mx-2">Cantidad</Label>
                      <Input
                        id="cantFirstBet"
                        type="number"
                        variant="little"
                        min="1"
                      />
                    </div>

                    <div className="relative flex items-center justify-between">
                      <Label class="inline-flex items-center ml-2 leading-7 text-gray-600">
                        <Input
                          id="betNotaCheck"
                          type="checkbox"
                          class="h-4 w-4 text-gray-600 mr-1"
                        />
                        Nota
                      </Label>

                      <div className="relative flex">
                        <div className="mr-9">
                          <Input
                            id="secondBet"
                            className="mr-3"
                            type="number"
                            variant="little"
                            min="0"
                            max="10"
                          />
                        </div>
                        <Label className="text-base mx-2">Cantidad</Label>
                        <Input
                          id="cantSecondBet"
                          type="number"
                          variant="little"
                          min="1"
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                      <Button
                        className="px-6 py-2"
                        variant="tertiary"
                        type="button"
                        style={{
                          transition: "all .15s ease"
                        }}
                        onClick={() => setShowModal(false)}
                      >
                        Cancelar
                      </Button>
                      <button
                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-green-600 outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{
                          transition: "all .15s ease"
                        }}
                      >
                        Apostar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
