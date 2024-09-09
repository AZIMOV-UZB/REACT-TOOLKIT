import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../redux/cart";
import { MdEdit } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";


import BasicModal from "../modal/Modal";
const Cart = () => {
  const initialState = {
    id: "",
    username: "",
    lname: "",
    phone: "",
    desc: "",
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);
  const cartList = cart.map((el) => (
    <div className="border p-4 bg-blue-800 relative" key={el.id}>
      <div>
      <FaUserCircle className="mx-auto text-white mb-5 text-[90px]" />
      </div>
      <div className="flex flex-col gap-2 text-center">
        <p className="text-[18px] font-semibold text-center  text-[#fff]">{el.username}</p>
        <p className="text-[18px] font-semibold text-[#fff]">{el.lname}</p>
        <p className="text-[14px] font-[600] text-[#fff]">{el.phone}</p>
        <div className="absolute top-0 right-0">
          <BasicModal ooo={<MdEdit className="text-[#fff] text-2xl mt-2" />} />
        </div>
      </div>
      <button
        onClick={() => dispatch(remove({ id: el.id }))}
        className=" w-full mt-2 bg-red-500 py-1 text-[20px] text-[#ffff]"
      >
        delete
      </button>
    </div>
  ));
  return (
    <>
      <div className="container mx-auto mt-10 px-5">
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-4">
          {cartList}
        </div>
      </div>
    </>
  );
};

export default Cart;
