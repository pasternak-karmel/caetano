import { ImgLayout } from "@/components/layImage";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ImgLayout />
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
