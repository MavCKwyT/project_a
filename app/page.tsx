import Image from "next/image";
import { Card } from "@/app/Card";
import { Filters } from "@/app/Filters";

import { mockData } from "@/api/mockData";

export default function Home() {
  const filter = (checkedState) => {
    console.log("--checkedState--", checkedState);
  };

  return (
    <main>
      <div className="flex justify-center flex-row-reverse ">
        <div>
          <div className="pb-5">
            <button
              type="button"
              className="bg-[#2096F3] text-white rounded w-[200px] h-[50px]"
            >
              Самый дешевый
            </button>
            <button
              type="button"
              className="bg-[#FFFFFF] text-black rounded w-[200px] h-[50px]"
            >
              Самый быстрый
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {mockData.map((ticket) => {
              return <Card ticket={ticket} />;
            })}
          </div>
        </div>
        <div>
          <Filters filter={filter} />
        </div>
      </div>
    </main>
  );
}
