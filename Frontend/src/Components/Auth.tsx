import { Link , useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { signupInput } from "@parth383/medium-common";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Auth = () => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });

  async function sendRequest(){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup` , postInputs)
      const jwt = await response.data.token;
      localStorage.setItem("token" ,jwt)
      navigate("/blogs");
      
    }
    catch(e){
      //alert
    }
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="flex flex-col p-3 rounded-lg shadow-lg w-full max-w-md bg-white">
        <div className="justify-center text-3xl p-4 rounded-t-lg text-center font-bold text-gray-800">
          Create an account
        </div>
        <div className="mt-2">
          <InputBox
            label="Username"
            placeholder="Enter your username"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                name: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-2">
          <InputBox
            label="Email"
            placeholder="m@example.com"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                email: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-2">
          <InputBox
            label="Password"
            placeholder="Password"
            onChange={(e) => {
              setPostInputs({
                ...postInputs,
                password: e.target.value,
              });
            }}
          />
        </div>
        <div className="mt-2 ml-32">
          <Button  label="Signup" onClick={sendRequest}  />
        </div>
        <div className="text-color-slate-400 mt-4 text-center">
          Already have an account? <Link to="/signin" className="text-blue-500 underline">Login</Link>
        </div>
      </div>
    </div>
  );
};
