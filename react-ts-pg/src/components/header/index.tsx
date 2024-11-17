import React from "react";

type HeaderProps = {
  name: string;
  role: string;
};

export default function Header({ name, role }: HeaderProps) {
  return (
    <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Welcome, {name}!</h1>
      <span className="text-lg italic">{role}</span>
    </header>
  );
}
