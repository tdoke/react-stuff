import { useState } from "react";

export default function useLang() {
  const [lang, setLang] = useState("en");

  return lang;
}
