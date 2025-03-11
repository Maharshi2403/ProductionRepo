"use client";
import { ReactNode, useState } from "react";
import Image from "next/image";
import Menu from "./Components/menu";
import Wrapper from "./Components/Wrapperdiv";

const ImageComponent = () => {
  return (
    <Image
      src="/resouces/Saturn_eclipse1.jpg"
      alt="Descriptive image text"
      width={640}
      height={640}
      className="opacity-50 m-auto"
    />
  );
};

interface intro {
  children: ReactNode;
}
function Introduction({ children }: intro) {
  return <div className="max-w-99/100">{children}</div>;
}

export default function Home() {
  const [rows, setrows] = useState(3);
  const [click, setClick] = useState(false);
  const [text, setText] = useState("");
  const [data, setData] = useState("");

  async function connectServer() {
    try {
      const res = await fetch("https://productionrepo-1.onrender.com/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const t = await res.json();
      setData(t.response);
    } catch (err) {
      console.log(err);
    }
  }

  function handleClick() {
    if (click === true) {
      setClick(false);
    } else {
      setClick(true);
    }

    return click;
  }
  return (
    <>
      <Menu>
        <Wrapper>
          <Introduction>
            <p className="font-sans text-center text-xl">
              AI Model- Deepseek based Persona Generator
            </p>
          </Introduction>
        </Wrapper>

        <Wrapper>
          <Introduction>
            <div className="h-140">
              Genereting you persona......
              <p>{data}</p>
            </div>
          </Introduction>
        </Wrapper>
      </Menu>

      <div>
        <ImageComponent />
      </div>

      <div className="absolute left-1/4 bottom-4 transform -translate-x-1/2 w-1/2 max-w-2xl bg-[#1a1a1a] p-2 rounded-xl border border-gray-700 shadow-lg flex items-center">
        <textarea
          className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none resize-none p-2 max-h-40 overflow-y-auto"
          rows={rows}
          placeholder="Ask anything..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              setText("");
              setrows(3);
              handleClick();
              connectServer();
            }
            if (e.shiftKey) {
              setrows(rows + 1);
            }
          }}
        />

        <button
          className="absolute bottom-2 right-2 px-2 py-1.5 bg-black text-white rounded-lg hover:bg-blue-600 transition"
          onClick={connectServer}
        >
          🔍
        </button>
      </div>
    </>
  );
}
