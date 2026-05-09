"use client";
import { authClient } from "@/lib/auth-client";
import {Check} from "@gravity-ui/icons";
import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { FaGoogle } from "react-icons/fa";
import { PiBookOpenUserBold } from "react-icons/pi";
import { Bounce, toast, ToastContainer } from "react-toastify";


const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl")
  const onSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password, // required
    });
    if (error) {
      toast.error('Invalid email or password', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      });
    } else {
      toast.success('Welcome back', {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => {
            router.push(callbackUrl || "/");
          },
          transition: Bounce,
      });
    }
  };

  const handleGoogle = async() => {
      const data = await authClient.signIn.social({
      provider: "google",
    });
  }
  return (
    <div className="bg-[#F8FAFC]">
      <div className="container mx-auto flex flex-col justify-center items-center min-h-screen">
        <div>
            <div className="text-[#0284C7] font-bold text-[40px] flex items-center gap-2 pb-6">
              <PiBookOpenUserBold/>
              <h2>Readify</h2>
            </div>
        </div>
        <div className="bg-[#ffffff] p-8 rounded-2xl border-2 border-[#bfbfbf53] shadow-lg mx-5 md:mx-0">
          <h2 className=" text-[24px] font-bold text-[#0F172A] mt-4 mb-8 text-center">Sign In To Readify</h2>
          <Form className="flex w-full max-w-96 flex-col gap-4" onSubmit={onSubmit}>

            {/* email */}

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            {/* password */}

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="Enter your password" />
              <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
              <FieldError />
            </TextField>

            <div className="flex gap-2 pt-4">
              <Button type="submit" className="w-full bg-[#0284C7] text-[#ffffff]">
                Sign In
              </Button>
            </div>
            <div> 
              <p className="text-center pb-4 text-[#64748B]">Or</p>
              <div>
                <button onClick={handleGoogle} className="flex gap-2 items-center bg-[#ffffff] text-[#3C4043] shadow-lg py-2 rounded-full w-full justify-center border border-[#DADCE0] text-[14px] font-medium cursor-pointer">
                  <FaGoogle />
                  Continue With Google
                </button>
              </div>
            </div>
          </Form>
          <div className="flex gap-2 justify-center pt-6 text-[#64748B] font-medium">
            <p>Don't have an account</p>
            <Link href='/signup' className="text-[#0284C7]">Sign Up</Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
    
  )
}
export default function SignInPage() {
  return (
    <Suspense fallback={<div><span className="loading loading-spinner loading-xl"></span></div>}>
      <SignInForm />
    </Suspense>
  );
}