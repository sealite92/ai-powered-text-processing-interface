"use client";

import React, { useState, useEffect } from "react";

export default function LanguageDetection({
  userInputText,
}: {
  userInputText: string;
}) {
  //const [text, setText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [detector, setDetector] = useState<AILanguageDetector | null>(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function initializeDetector() {
      if ("ai" in self && "languageDetector" in self.ai) {
        try {
          const languageDetectorCapabilities =
            await self.ai.languageDetector.capabilities();
          const canDetect = languageDetectorCapabilities.available;

          if (canDetect === "no") {
            setStatus("Language detection is not available");
            return;
          }

          if (canDetect === "readily") {
            const newDetector = await self.ai.languageDetector.create();

            setDetector(newDetector);
            setStatus("Language detector is ready");
          } else if (canDetect === "after-download") {
            const newDetector = await self.ai.languageDetector.create({
              monitor(m) {
                m.addEventListener("downloadprogress", (e) => {
                  setStatus(
                    `Downloading model: ${Math.round(
                      (e.loaded / e.total) * 100
                    )}%`
                  );
                });
              },
            });
            // Removed await newDetector.ready as it does not exist on AILanguageDetector
            setDetector(newDetector);
            setStatus("Language detector is ready");
          }
        } catch (error) {
          console.error("Error initializing language detector:", error);
          setStatus("Error initializing language detector");
        }
      } else {
        setStatus("Language Detection API is not available");
      }
    }

    initializeDetector();
  }, []);

  useEffect(() => {
    async function detectLanguage() {
      if (!detector) {
        setStatus("Language detector is not ready");
        return;
      }

      try {
        const results = await detector.detect(userInputText);
        if (results.length > 0) {
          setDetectedLanguage(
            `${
              results[0].detectedLanguage
            } (Confidence: ${results[0].confidence.toFixed(4)})`
          );
        } else {
          setDetectedLanguage("Unable to detect language");
        }
      } catch (error) {
        console.error("Error detecting language", error);
        setStatus("Error detecting language");
      }
    }
    if (userInputText) {
      detectLanguage();
    }
  }, [detector, userInputText]);

  return (
    <div className="">
      {status.includes("Error") && (
        <p className="text-red-500  bg-lime-400 p-6 rounded-md">{status}</p>
      )}
      {detectedLanguage && (
        <p className="text-slate-950  bg-lime-400 p-1 rounded-md w-fit h-fit size-1">
          Detected Language:{" "}
          <span className="text-red-300">{detectedLanguage}</span>
        </p>
      )}
    </div>
  );
}
