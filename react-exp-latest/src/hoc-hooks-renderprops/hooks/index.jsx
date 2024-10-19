import React from "react";
import useFlag from "./useFlag";
import useLang from "./useLang";
import PrintDetails from "./PrintDetails";

const Container = () => {
  const flag = useFlag();
  const lang = useLang();
  return <PrintDetails lang={lang} flag={flag} />;
};

export default Container;
