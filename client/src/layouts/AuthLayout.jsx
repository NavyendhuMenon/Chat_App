import React from 'react';
import { GiBee } from "react-icons/gi";

export default function AuthLayout({ children }) {
  return (
    <div>
      <div className="flex bg-white justify-center py-4 shadow-md">
        <h1 className="text-[var(--color-primary)] text-4xl font-extrabold flex items-center gap-3">
          ChatBee <GiBee className="text-5xl" />
        </h1>
      </div>
      {children}
    </div>
  );
}

