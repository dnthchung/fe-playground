///path : src/components/count.tsx
import React, { ReactNode } from "react";

type CountProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Count = ({ setCount, children }: CountProps) => {
  return (
    <div>
      <p>{children}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count + 1)}>
        Increase
      </button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setCount((count) => count - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Count;
