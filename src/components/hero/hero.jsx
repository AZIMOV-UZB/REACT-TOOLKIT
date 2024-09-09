import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, res } from "../../redux/counter-slase";
const Hero = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  return (
    <div className="container mx-auto flex flex-wrap gap-2 items-center justify-center">
      <button
        className="border mr-3 bg-black py-2 rounded-[20px]  text-[18px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(inc())}
      >
        increment
      </button>
      <button
        disabled={counter <= 0}
        className="border mr-3 bg-black py-2 rounded-[20px]  text-[18px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(dec())}
      >
        Decrement
      </button>
      <button
        className="border mr-3 bg-black py-2 rounded-[20px]  text-[18px] text-[#fff] w-[160px] items-center"
        onClick={() => dispatch(res())}
      >
        reset
      </button>
    </div>
  );
};

export default Hero;
