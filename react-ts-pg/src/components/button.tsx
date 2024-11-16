import React from "react";

// export default function Button(propNe: {
//   backgroundColor: string;
//   text: string;
// }) {
//   const { backgroundColor, text } = propNe;
//   return (
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Button
//       </button>
//     </div>
//   );
// }

// export default function Button({
//   backgroundColor,
//   text,
//   fontSize,
//   pillShape,
// }: {
//   backgroundColor: string;
//   text: string;
//   fontSize: number;
//   pillShape?: boolean;
// }) {
//   return (
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Button
//       </button>
//     </div>
//   );
// }

//c3
type ButtonProps = {
  backgroundColor: string; //property
  text: string;
  fontSize: number;
  pillShape: boolean;
};
export default function Button({
  backgroundColor,
  text,
  fontSize,
  pillShape,
}: ButtonProps) {
  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  );
}
