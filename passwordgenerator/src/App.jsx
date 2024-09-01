import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqestuvwxyz";

    if (numberAllowed) str += "0123456789";

    if (characterAllowed) str += "!@#$%^&*()-_=+[{]};:',<.>/?";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numberAllowed, characterAllowed, setPassword]); //dependecy array..if something changes in this ....fn reruns again and again

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  //ref hook

  const passwordRef = useRef(null);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center ">
        <h1 className="text-center text-white">Password Generator</h1>
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 mb-4 rounded-lg"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-600 text-white px-3 py-1 shrink-0 rounded-lg"
          onClick={copyPasswordToClipBoard}
        >
          Copy
        </button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev);
              }}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
