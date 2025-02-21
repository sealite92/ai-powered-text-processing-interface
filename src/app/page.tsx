"use client";
import InputText from "@/components/InputText";
import OutputText from "@/components/OutputText";
import { useState } from "react";

export default function Home() {
  const [displayValue, setDisplayValue] = useState("");

  const handleSetDisplayValue = (userInput: string) => {
    setDisplayValue(userInput);
  };

  return (
    <>
      <div className="bg-green-50 p-10 h-screen grid gap-5 box-border min-w-full">
        <OutputText text={displayValue} />

        <InputText
          onSetUserInput={(value: string) => handleSetDisplayValue(value)}
        />
      </div>
    </>
  );
}
