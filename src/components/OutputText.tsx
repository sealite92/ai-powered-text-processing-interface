import LanguageDetection from "./LanguageDetection";

interface OutputTextProps {
  text: string;
}

export default function OutputText({ text }: OutputTextProps) {
  return (
    <div className="bg-lime-300 p-10 rounded-md " style={{ color: "white" }}>
      <p className=" text-slate-600">{text}</p>
      <LanguageDetection userInputText={text} />
    </div>
  );
}
