import Button from "@/components/button";
export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <Button
          backgroundColor="bg-red-500 hover:bg-red-700"
          text="Button"
          fontSize={20}
          pillShape={true}
        />
      </div>
    </>
  );
}

// React.FC chỉ dùng cho tằng const Component: React.FC<Props> = (props) => {}
