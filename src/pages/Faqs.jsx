import { Icon } from "@iconify/react";
import React, { useState } from "react";
import AccodionItems from "../components/faq/AccodionItems";

const FaqQuest = [
  {
    question: "Who is Rapyd Cars?",
    answer: `Rapyd Cars is an innovative Auto finance company that specializes in providing vehicles for smart and hardworking commercials drivers who want to own their own cars and work for themselves.`,
  },
  {
    question: "What type of cars do you have?",
    answer: `We have Pontiac Vibe, Toyota Matrix, Toyota Corolla, Honda Civic, Toyota Camry. The year of Manufacture ranges from 2003 – 2007. These car models were selected based on our research and are best suited for commercial use in Nigeria.`,
  },
  {
    question: "Are the cars Nigerian or Foreign used?",
    answer: `All our Cars are Foreign Used. We do not offer Nigerian Used Cars unless when a vehicle is being reassigned to a new driver.`,
  },
  {
    question: "Do I have the option to choose the type of car that I want?",
    answer: `Yes, but this is from a list of cars that we have available at the time your application was processed.`,
  },
];

const Faqs = () => {
  const [clicked, setClicked] = useState("0");
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <section className="bg-slate-100 pb-24 md:pt-32 pt-24 px-6 lg:px-16">
      <div className="space-y-6">
        <h1 className="md:text-4xl text-2xl font-extrabold mb-6">FAQs</h1>
        <div className="flex md:flex-row flex-col gap-4">
          <div className="basis-1/5 space-y-5">
            <form className="relative  text-gray-600">
              <input
                className="shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] bg-white py-4 md:w-96 w-full px-5 pl-12 rounded-md text-xs focus:outline-none"
                type="search"
                placeholder="Search..."
              />
              <span className="absolute left-2 top-0 mt-4 ml-2">
                <Icon icon="ri:search-line" fontSize={18} />
              </span>
            </form>
            <div className="md:flex hidden flex-col h-auto rounded-xl overflow-hidden">
              {FaqQuest.map((items, index) => (
                <div
                  key={index}
                  onClick={() => handleToggle(index)}
                  className={`h-16 w-full px-6 flex items-center border-b border-gray-300 cursor-pointer ${
                    clicked === index
                      ? "bg-blue-700 text-white font-semibold"
                      : "bg-white text-black"
                  }`}
                >
                  <p className="text-base ">{items.question}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-4/5 space-y-6 w-full">
            {FaqQuest.map((faq, index) => (
              <AccodionItems
                faq={faq}
                onToggle={() => handleToggle(index)}
                active={clicked === index}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
