"use client";
import InputText from "@/components/InputText";
import LanguageDetection from "@/components/LanguageDetection";
import OutputText from "@/components/OutputText";
import { useState } from "react";

export default function Home() {
  const [displayValue, setDisplayValue] = useState("");

  const handleSetDisplayValue = (userInput: string) => {
    setDisplayValue(userInput);
  };

  return (
    <>
      <div className="bg-slate-950 m-12 h-96 flex flex-col gap-4 p-10 justify-between">
        <OutputText text={displayValue} />
        <LanguageDetection userInputText={displayValue} />

        <InputText onSetUserInput={(value) => handleSetDisplayValue(value)} />
      </div>
    </>
  );
}
