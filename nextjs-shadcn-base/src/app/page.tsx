//path : src/app/page.tsx

import { ModeToggle } from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        {/* <p className=" font-bold underline">Hello world!</p> */}
        <ModeToggle />
      </div>
    </>
  );
}
