"use client";
import useLoginModel from "@/app/hooks/useLoginModel";
import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const loginModal = useLoginModel();
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login</h2>
      <form action="" className="space-y-4">
        <input type="email" placeholder="Your e-mail address" className="px-4 w-full h-13.5 border-gray-300 rounded-xl" />
        <input type="password" placeholder="Your password" className="px-4 w-full h-13.5 border-gray-300 rounded-xl" />
        <div className="p-5 airbnb text-white rounded-xl opacity-80 pointer-events-none">The error message</div>
        <CustomButton label="Login" onClick={()=>console.log('test')} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={loginModal.isOpen}
      close={loginModal.close}
      label="Log in"
      content={content}
    />
  );
};

export default LoginModal;
