"use client";
import Image from "next/image";
import { useState } from "react";



export default function Home() {

  const [expandItem, setExpandItem] = useState(2);
  const sliding = [
    { image: "/img-2.jpg" },
    { image: "/img-4.jpg" },
    { image: "/img-6.jpg" },
    { image: "/img-1.jpg" },
    { image: "/img-5.jpg" },
  ]
  return (
    <>

      <main className="w-screen h-screen bg-black overflow-hidden">
        <div className="bgNormal bgResponsive w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out delay-100   relative p-4"
          style={{
            backgroundImage: `url(${sliding[expandItem].image})`,

          }}>
          <div className="absolute top-0 left-0 w-full h-full inset-0 z-0 bg-black opacity-50 ">
          </div>
          <div className="max-w-7xl h-[50vh] flex justify-center items-center mt-10 gap-2 z-20 ">
            {
              sliding.map((item, index) => {
                return (
                  <div
                    className={`h-full bg-white rounded-2xl cursor-pointer transition-all duration-300 delay-75 ease-in-out overflow-hidden ${expandItem === index ? "w-[40%]" : "w-[15%] hover:bg-gray-400"} min-w-[40px] block`}
                    key={index}
                    onClick={() => setExpandItem(index)}
                  >
                    <Image
                      src={item.image}
                      alt="image"
                      width={3000}
                      height={1500}
                      className="object-cover  w-full h-full"
                    />
                  </div>
                );
              })
            }
          </div>
        </div>
      </main>
    </>
  );
}
