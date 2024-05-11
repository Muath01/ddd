"use client";
import React from "react";
import one1 from "../data/answers/q1/A.png";
// import { questions as questionsList } from "../../data/questions";
import { useState } from "react";
import Clock from "./_components/clock";
// import Clock from "./Clock";
function Test() {
  const [score, setScore] = useState(0);
  //   const [questions, setQuestion] = useState(questionsList);
  //   const numberOfQuestions = questions[questions.length - 1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [styling, setStyling] = useState([" "]);
  const [toggle, setToggle] = useState(true);

  function move(e) {
    const value = e.target.innerHTML;

    // The code checks whether the button clicked is "Next" or not. If it is "Next",
    // the code moves to the next question unless it's the last question. If the button
    // is not "Next", the code moves to the previous question unless it's the first question.
    const newIndex =
      value == "Next"
        ? currentIndex === questions.length - 1
          ? questions.length - 1
          : currentIndex + 1
        : currentIndex === 0
        ? 0
        : currentIndex - 1;

    setCurrentIndex(newIndex);
  }

  const questions = Array.from({ length: 20 }, (_, i) => i + 1);

  //   function answerSelection(e:any, question:any, answer:string) {
  //     // console.log("answer", answer)

  //     console.log("Location: ", window.location.pathname);

  //     const updateStyling = [...styling];

  //     const newQuestions = [...questions];

  //     const questionIndex = newQuestions.findIndex((q) => q.id === question.id);
  //     newQuestions[questionIndex].selected = answer.id;
  //     setStyling(updateStyling);
  //   }

  //   function calculateScore(e:number) {
  //     const total = questions.reduce((acc, question) => {
  //       return question.selected === question.isCorrect ? acc + 1 : acc;
  //     }, 0);

  //     setScore(total);

  //     localStorage.setItem("qs4test", total);
  //     const testQ = localStorage.getItem("qs4test");
  //     console.log("TESTFORMSCRE: ", testQ);
  //     console.log("TOTAL: ", total);
  //     // navigate("/form");

  //     // if (currentIndex === 19) {
  //     //   navigate("/finish");
  //     // }
  //     console.log(score);
  //   }

  const mins = 60 * 20 * 1000;
  const NOW_IN_MS = new Date().getTime();

  //20 minutes
  const time = NOW_IN_MS + mins;

  return (
    <>
      {toggle ? (
        <div className="flex justify-center items-center  h-full relative bg-white   ">
          <div className="border sm:w-[70%] w-[95%]   h-[60%] sm:h-[50%] absolute bg-white border-gray-400 flex justify-center rounded-md">
            <div className=" w-[90%]    mt-4 leading-7  ">
              <h1 className="text-[30px] font-bold font-serif">
                Get ready to start the Qtink IQ test
              </h1>

              <div className="flex items-center  gap-4 mt-4">
                <span className="inline-block w-[20px]  h-[20px] bg-blue-400 rounded-full "></span>{" "}
                <p className="m-0 font-wotfard text-[20px] font-serif">
                  Answer all questions
                </p>
              </div>
              <div className="flex items-center  gap-4 mt-4">
                <span className="inline-block w-[20px]  h-[20px] bg-blue-400 rounded-full "></span>{" "}
                <p className="m-0  text-[20px]  font-serif">
                  There is plenty of time don't rush
                </p>
              </div>
              <div className="flex items-center  gap-4 mt-4">
                <span className="inline-block  w-[20px] h-[20px]  bg-blue-400 rounded-full"></span>
                <p className="m-0  text-[20px]  font-serif">
                  Press "Finish" after answering all questions
                </p>
              </div>
            </div>
            <button
              onClick={(e) => {
                setToggle(false);
              }}
              className=" bg-blue-400 rounded-md  font-bold py-3 absolute bottom-2  w-[90%] text-white hover:bg-blue-500"
            >
              Start
            </button>
          </div>
        </div>
      ) : (
        <div className="  select-none ">
          <div className=" h-40 flex justify-center items-center relative text-[62px] font-bold md:absolute left-3 md:top-3 mr-1">
            <Clock target={time} />
          </div>

          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 items-start gap-0  relative bottom-5 md:bottom-0  top-5 ">
            <div className="flex flex-col justify-center items-center relative  ">
              <h1 className="text-[2rem] block">Question {currentIndex + 1}</h1>
              <div className=" md:h-[360px]  md:w-[450px] w-3/4 h-[280px]    ">
                {/* <img src={require("../data/questions/question-one.png")} alt="Your Image" className="h-full w-full" /> */}
                <img
                  //   src={questions[currentIndex].question}
                  alt="Your Image"
                  width={20}
                  className={`h-full w-full object-contain `}
                />
              </div>
            </div>
            <div className=" grid row-span-2 relative bottom-10 md:bottom-1  h-full  ">
              <h1 className=" text-center   leading-10 md:leading-2 text-[24px] font-serif ">
                Select Answer
              </h1>
              {}

              {/* <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-6 grid-cols-3 relative bottom-8 cursor-pointer 2xl:md:max-w-[1200px]  md:max-w-[1000px] w-full h-[15rem] gap-2  mt-4 justify-self-center items-center md:items-start row-span-2">
                {questions[currentIndex].answers.map((answer: any) => (
                  <img
                    // onClick={(e) =>
                    //   answerSelection(e, questions[currentIndex], answer)
                    // }
                    src={answer.answer}
                    alt="Your Image"
                    className={
                      styling[0] +
                      "h-full w-full sm:w-full  md:w-[150px]   object-contain md:h-[70%]   md:object-fill    border-[0.1px] border-[#00d0ff] hover:shadow-2xl cursor-pointer  " +
                      (answer.id == questions[currentIndex].selected
                        ? " selected"
                        : "")
                    }
                  />
                ))}
              </div> */}

              {/* padding: .75rem 2.5rem; */}
              <div className="w-full flex  justify-center gap-3 relative md:bottom-16  ">
                {currentIndex == 19 ? (
                  <h1 className="text-black text-xs absolute bottom-16 ">
                    This is the last question on the Test. Click finish once
                    complete
                  </h1>
                ) : null}
                <button
                  onClick={(e) => move(e)}
                  className=" cursor-pointer text-[16px] font-[120px] flex items-center justify-center xl:px-[80px] md:px-[40px]  text-white w-28 border-none rounded-[5px] transition duration-400 ease bg-[#fd0d0d] hover:bg-[#fd0d0d90]"
                >
                  Previous
                </button>
                <button
                  onClick={(e) => move(e)}
                  className=" cursor-pointer text-[16px] font-[120px] flex items-center justify-center xl:px-[80px] md:px-[40px] text-white w-28 px-[2rem] py-[1.2rem]   border-none rounded-[5px] transition duration-400 ease bg-[#5cdb5c] hover:bg-[#5cdb5c90]"
                >
                  Next
                </button>
                <button
                  //   onClick={(e) => calculateScore(e)}
                  className=" cursor-pointer text-[16px] font-[120px] flex items-center justify-center w-28 xl:px-[80px] text-white  border-none rounded-[5px]  transition duration-400 ease bg-[#0d6dfd] hover:bg-[#0d6dfd90]"
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Test;
