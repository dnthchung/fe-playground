import Button from "@/components/button";
export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Button
          myStyle={{
            backgroundColor: "red",
            // text: "Button 1",
            fontSize: 16,
            // pillShape: true,
          }}
        />
      </div>
    </>
  );
}

// React.FC chỉ dùng cho tằng const Component: React.FC<Props> = (props) => {}
