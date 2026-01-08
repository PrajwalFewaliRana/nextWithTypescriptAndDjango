import React from 'react'
interface CustomButtonProps{
    label:string;
    className?:string;
    onClick:()=>void;
}

const CustomButton: React.FC<CustomButtonProps> = ({label,onClick,className}) => {
  return (
    <div onClick={onClick}  className={`${className} text-center w-full py-4 airbnb text-white rounded-xl transition cursor-pointer`}>{label}</div>
  )
}

export default CustomButton