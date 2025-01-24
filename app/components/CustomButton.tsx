interface Props {
  children: React.ReactNode;
  onclick?: () => void;
}

export const CustomButton = ({ children, onclick }: Props) => {
  return (
    <div
      onClick={onclick}
      className="mx-auto flex w-fit h-fit max-w-lg items-center justify-center clear-start "
    >
      <div className="relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded border border-slate-800 p-[1.5px]">
        <div className="relative z-20 flex w-full rounded bg-black hover:bg-zinc-800 transition-colors py-[5px] text-sm px-2.5">
          <span className="opacity-80 hover:opacity-100 transition">
            {children}
          </span>
        </div>
      </div>
    </div>
  );
};
