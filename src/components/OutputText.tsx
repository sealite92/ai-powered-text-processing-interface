import React from "react";

export default function OutputText({ text }) {
  async function detectLanguage(text) {
    if ("ai" in self && "languageDetector" in self.ai) {
      const detector = await self.ai.languageDetector.create();
      const results = await detector.detect(text);
      console.log(results);
      return results[0]; // Return the most likely language
    } else {
      console.error("Language Detector API is not available");
    }
  }
  detectLanguage(text);
  return (
    <div className="text-white">
      <p>{text}</p>
      <span>{}</span>
    </div>
  );
}
