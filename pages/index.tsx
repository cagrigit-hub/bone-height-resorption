import Image from "next/image";
import { Roboto } from "next/font/google";
import { useState } from "react";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export default function Home() {
  const [alpha, setAlpha] = useState(0);
  const [tHalf, setTHalf] = useState(0);
  const [time, setTime] = useState(0);
  const [initial, setInitial] = useState(0);
  const [bhRemaining, setBHRemaining] = useState(0);
  const [result, setResult] = useState(0);
  const [popup, setPopup] = useState(false);
  function calculate(e: any) {
    e.preventDefault();

    const result = (alpha * time) / (time + tHalf);
    const bhRemaining = (1 - result) * initial;
    console.log(result);
    setResult(result);
    setBHRemaining(bhRemaining);
    setPopup(true);
  }
  return (
    <main
      className={
        "flex items-center justify-center flex-col    " + roboto.className
      }>
      <div
        className={
          "flex space-y-4 items-center text-center justify-center flex-col mt-16  "
        }>
        <h1 className="text-xl md:text-2xl font-bold">
          Bone Height Resorpiton Calculator
        </h1>
        <h2 className="text-lg md:text-xl ">Burak Ok</h2>
      </div>
      <form
        onSubmit={calculate}
        className="flex shadow-xl flex-col space-y-3 md:space-y-4 mt-8 md:mt-12 bg-[#00916E] text-[#eae1da] px-20  md:px-24 py-6 md:py-12 rounded-lg ">
        <div>
          <h1 className="font-bold">Enter the 'α' constant: </h1>
          <input
            required
            type="text"
            onChange={(e) => setAlpha(parseFloat(e.target.value))}
            className="outline-none bg-[#333] border border-[#FEEFE5] rounded-lg pl-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Enter the 't1/2' constant: </h1>
          <input
            required
            type="text"
            onChange={(e) => setTHalf(parseFloat(e.target.value))}
            className="outline-none bg-[#333] border border-[#FEEFE5] rounded-lg pl-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Enter the time passed</h1>
          <input
            required
            type="text"
            onChange={(e) => setTime(parseFloat(e.target.value))}
            className="outline-none bg-[#333] border border-[#FEEFE5] rounded-lg pl-2"
          />
        </div>
        <div>
          <h1 className="font-bold">Enter the inital bone height</h1>
          <input
            required
            type="text"
            onChange={(e) => setInitial(parseFloat(e.target.value))}
            className="outline-none bg-[#333] border border-[#FEEFE5] rounded-lg pl-2"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-[#FEEFE5] font-bold  px-4 py-2 border-4 border-[#FEEFE5] rounded-full hover:bg-[#FEEFE5] hover:text-[#333] transition ease-in-out duration-200">
            Calculate
          </button>
        </div>
      </form>
      {popup && (
        <div
          id="popup"
          className="fixed space-y-4 flex items-center justify-center flex-col font-bold bg-gray-200 opacity-[0.8] h-[120vh] w-screen">
          <h1 className="text-xl md:text-2xl">RESULT: </h1>
          <h2 className="text-lg md:text-xl ">
            Bone height resorption: {result}
          </h2>
          <h2>Bone height resorption percentage: {result * 100}%</h2>
          <h2 className="text-lg md:text-xl ">
            Bone height remaining: {bhRemaining}
          </h2>
          <button
            className="text-[#333] font-bold  px-4 py-2 border-4 border-[#333] rounded-full hover:bg-[#333] hover:text-[#FEEFE5] transition ease-in-out duration-200"
            onClick={() => {
              setPopup(false);
            }}>
            Close
          </button>
        </div>
      )}
    </main>
  );
}
