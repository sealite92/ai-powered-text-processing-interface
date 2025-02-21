interface OutputTextProps {
  text: string;
}

export default function OutputText({ text }: OutputTextProps) {
  return (
    <div className="text-white" style={{ color: "white" }}>
      <p>{text}</p>
    </div>
  );
}
