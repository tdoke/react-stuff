import { useState } from "react";

export default function useFlag() {
  const [flag, setFlag] = useState('IN');

  return flag;
}
