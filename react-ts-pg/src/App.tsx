// React.FC chỉ dùng cho tằng const Component: React.FC<Props> = (props) => {}

//src : src/App.tsx
import Header from "@/components/header";
import { Section } from "@/components/section";
import Count from "@/components/count";

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Header name="John Doe" role="Administrator" />
      <Section title="My Title">
        <p>This is a paragraph inside the section.</p>
      </Section>
      <main className="p-4">
        <p>Welcome to the app!</p>
        <div className="mt-12">
          <Count setCount={setCount}>
            <p>Child : Count: {count}</p>
          </Count>
        </div>
      </main>
    </>
  );
}
