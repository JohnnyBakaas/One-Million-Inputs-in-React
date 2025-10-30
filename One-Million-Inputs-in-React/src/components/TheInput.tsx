import { useState } from "react";
import { chronoInputs } from "../helpers/converters/chronoInputs";
import { convertChrono } from "../helpers/converters/convertChrono";
import styles from "./TheInput.module.css";

type TheInputProps = {
  value: string;
  setValue: (str: string) => void;
};

const TheInput = ({ value, setValue }: TheInputProps) => {
  const [inputType, setInpuType] =
    useState<(typeof chronoInputs)[number]>("date");

  const validateInputType = (val: string): (typeof chronoInputs)[number] => {
    if (chronoInputs.includes(val as (typeof chronoInputs)[number])) {
      return val as (typeof chronoInputs)[number];
    }
    return "date";
  };

  const handleChangeInputType = (val: string) => {
    const theType = validateInputType(val);
    const newValue = convertChrono(inputType, theType, value);

    console.log("inputType: ", inputType);
    console.log("theType:   ", theType);
    console.log("value:     ", value);
    console.log("newValue:  ", newValue);

    setInpuType(theType);
    setValue(newValue);
  };

  return (
    <div className={styles["input-wrapper"]}>
      <input
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      <select
        value={inputType}
        onChange={(e) => handleChangeInputType(e.currentTarget.value)}
      >
        {chronoInputs.map((e) => (
          <option value={e} key={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TheInput;
