import { useState } from "react";

interface InputTextProps {
  onSetUserInput: (input: string) => void;
}

export default function InputText({ onSetUserInput }: InputTextProps) {
  // const handleSetInputText = (e) => {
  //   e.preventDefault();
  //   // setInputText("");
  //   console.log("Submitted text:", inputText);
  // };

  const [userInput, setUserInput] = useState("");

  return (
    <form
      className="border-green-100  w-full relative"
      onSubmit={(e) => {
        e.preventDefault();
        if (userInput.trim() !== "") {
          onSetUserInput(userInput);
        }
        setUserInput("");
      }}
    >
      <label htmlFor="text-input"></label>
      <textarea
        onChange={(e) => setUserInput(e.target.value)}
        value={userInput}
        name="text-input"
        id="text-input"
        className="text-area inline-block w-full p-3 border rounded-md"
        placeholder="Type some text"
      ></textarea>
      <button
        type="submit"
        className="btn bg-white h-10 w-10 rounded-full absolute  flex items-center justify-center shadow-md"
      >
        <svg
          className="svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711V12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5V3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </form>
  );
}
