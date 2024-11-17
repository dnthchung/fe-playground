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

//===c3

// type Color = "red" | "blue" | "green";
// type ButtonProps = {
//   backgroundColor: Color; //property
//   text: string;
//   fontSize: number;
//   pillShape: boolean;
//   padding?: number[]; // [number, number, ...] => số number thêm vào = length mảng
// };
// export default function Button({
//   backgroundColor,
//   text,
//   fontSize,
//   pillShape,
//   padding,
// }: ButtonProps) {
//   return (
//     <div>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//         Button
//       </button>
//     </div>
//   );
// }

//===c4
type Color = "red" | "blue" | "green";

type ButtonProps = {
  myStyle: {
    backgroundColor: Color;
    text: string;
    fontSize: number;
    pillShape: boolean;
    // padding?: number[]; => React.CSSProperties không hỗ trợ kiểu dữ liệu này
  };
};

type ButtonProps2 = {
  myStyle: React.CSSProperties;
};

export default function Button({ myStyle }: ButtonProps2) {
  return (
    <div>
      <button style={myStyle}>Button</button>
    </div>
  );
}
