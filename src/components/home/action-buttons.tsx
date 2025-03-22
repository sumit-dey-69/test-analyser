import { useResetTest, useShowPage, useToggleShowPage } from "@/zustand/store";

function ActionButtons() {
  const reset = useResetTest();
  const showPage = useShowPage();
  const toggleShowPage = useToggleShowPage();

  const button = [
    { name: "Reset", onClick: reset },
    { name: "Download" },
    { name: showPage ? "Results" : "Back", onClick: toggleShowPage },
  ];
  return (
    <div className="flex justify-center gap-4 h-max">
      {button.map((btn, index) => (
        <button
          key={index}
          className="bg-white/80 hover:bg-white/70 text-black hover:text-white transition-all font-semibold px-4 py-2 rounded cursor-pointer"
          onClick={btn.onClick}
        >
          {btn.name}
        </button>
      ))}
    </div>
  );
}

export default ActionButtons;
