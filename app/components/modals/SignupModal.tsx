"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
  const signupModal = useSignupModal()
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login</h2>
      <form action="" className="space-y-4">
        <input type="email" placeholder="Your e-mail address" className="px-4 w-full h-13.5 border-gray-300 rounded-xl" />
        <input type="password" placeholder="Your password" className="px-4 w-full h-13.5 border-gray-300 rounded-xl" />
        <input type="Repeat password" placeholder="Your password" className="px-4 w-full h-13.5 border-gray-300 rounded-xl" />
        <div className="p-5 airbnb text-white rounded-xl opacity-80 pointer-events-none">The error message</div>
        <CustomButton label="Signup" onClick={()=>console.log('test')} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
