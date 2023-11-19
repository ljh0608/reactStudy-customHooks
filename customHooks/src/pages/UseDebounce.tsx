import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
const DebouncedInput = () => {
  const [value, setValue] = useState<string>("");

  const [debouncedValue, setDebouncedValue] = useState<string>(value);
  const [longDebouncedValue, setLongDebouncedValue] = useState<string>(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [value, 500]);

  useEffect(() => {
    const timer = setTimeout(() => setLongDebouncedValue(value), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [value, 1000]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Real-time value: {value}</p>
      <p>Debounced value: {debouncedValue}</p>
      <p>2 Sec Debounced value: {longDebouncedValue}</p>
    </div>
  );
};

export default DebouncedInput;
