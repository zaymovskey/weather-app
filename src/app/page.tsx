import { ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <main className="p-6 space-y-6">
      <button className="px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
        Кнопка Tailwind
      </button>

      <div className="p-4 rounded-lg bg-gray-100 md:bg-green-100">
        Измени ширину окна → с md фона станет зелёным
      </div>
    </main>
  );
}
