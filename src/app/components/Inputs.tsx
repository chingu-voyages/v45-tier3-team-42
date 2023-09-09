import React from "react";

interface InputProps {
  placeholder?: string;
  name?: string;
  value?: string | number | readonly string[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}


const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    value = "",
    placeholder = "",
    onChange = () => null,
    name = "",
    type="",
  } = props;
  function triggerOnChangeEvent(e:any) {
    onChange(e);
  }

  return (
    <input
      type={type}
      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-white-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
      value={value}
      placeholder={placeholder}
      name={name}
      onChange={triggerOnChangeEvent}
    />
  );
};

export default Input;
