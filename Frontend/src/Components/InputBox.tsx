import { ChangeEvent } from "react"

interface InputBox {
  label : string,
  placeholder : string
  onChange : (e:ChangeEvent<HTMLInputElement>) =>void
  type? : string
}


export const InputBox = ({label , placeholder , onChange , type}:InputBox)=>{

  
  return <div>
    <div className="mb-5 mt-3">
  <label className="block mb-2 text-md font-bold text-gray-900 ">{label}</label>
  <input onChange = {onChange}type={type||"text"} className="bg-green-50 border  text-sm  rounded-lg  focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-100 dark:border-green-100" placeholder={placeholder}/>
</div>
  </div>

}