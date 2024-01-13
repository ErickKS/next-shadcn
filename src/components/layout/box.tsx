interface BoxProps {
  children: React.ReactNode;
}

export function Box({ children }: BoxProps) {
  return (
    <div className="flex justify-center items-center min-h-[350px] w-full border rounded-[0.5rem]">
      {children}
    </div>
  );
}
