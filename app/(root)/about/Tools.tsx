"use client";

export interface Tool {
  name: string;
  color: string;
}

interface Props {
  tools: Tool[];
  className?: string;
}

const Tools = ({ tools, className }: Props) => {
  return (
    <div className="flex gap-3 flex-wrap items-center">
      {tools?.map((tool, index) => (
        <span
          className={` border-[1px] py-2 px-4 cursor-pointer text-[12px] hover:-rotate-3 transition-all delay-75 will-change-transform ${className}`}
          key={index}
          style={{
            color: `${tool.color}`,
            backgroundColor: `${tool.color}20`,
            borderColor: `${tool.color}50`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${tool.color}40`; // Darker bg on hover
            e.currentTarget.style.borderColor = `${tool.color}A0`; // Stronger border
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = `${tool.color}20`; // Reset bg
            e.currentTarget.style.borderColor = `${tool.color}80`; // Reset border
          }}
        >
          {tool.name}
        </span>
      ))}
    </div>
  );
};

export default Tools;
