import React from "react";

type InputProps = {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label: string;
  type?: "text" | "number" | "email" | "password" | "tel" | "checkbox";
  value?: string;
};

export default function Input({
  className,
  id,
  label,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className={className}>
      <label className="block" htmlFor={id}>
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={id}
        className="border border-gray-600 p-2"
        type={type}
      />
    </div>
  );
}
