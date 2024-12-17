import { useBoard } from "@/hooks/useBoard";

export const Switch = () => {
  const xIsNext = useBoard(state => state.xIsNext)

  return (
    <div
      className={`relative w-32 h-10 rounded-full border-4 ${xIsNext ? "border-error" : "border-border"
        } flex items-center bg-gray-800`}
    >
      <div
        className={`absolute h-8 w-20 rounded-full bg-red-500 text-red-900 flex items-center justify-center font-bold transition-all duration-300 ${xIsNext ? "left-0" : "left-10"
          }`}
      >
        Ali
      </div>
    </div>
  );
};