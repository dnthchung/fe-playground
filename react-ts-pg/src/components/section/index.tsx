import { ReactNode } from "react";

type SectionProps = {
  title?: string;
  children?: ReactNode; // Nhận bất kỳ nội dung hợp lệ nào
};

export const Section = ({ title = "Default Title", children }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  );
};
