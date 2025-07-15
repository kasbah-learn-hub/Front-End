"use client";

import React, { FormEvent, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
// import { forgotPassword } from "@/services/auth";
// import { login } from '@/services/auth'

const ForgotPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isSent,setIsSent] = useState<boolean>(false)
  const [email,setEmail] = useState('');

  // trying UI
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
    //   const response = await forgotPassword(email);
    //   if(response.status === 200){
        // if the email exists or not (response from backend should be 200 as status)
            // setIsSent(true)
    //   }
      setTimeout(() => {
        setLoading(false);
        toast.success("reset link sent to your mail");
        setIsSent(true)
      }, 1500);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      // setLoading(false)
    }
  };
  return (
    <div className="w-[95%] md:w-[60%] lg:w-[30%]">
      <div className="flex justify-center">
        <Image
          src={"/logo/logo-circule-frame-dark.png"}
          width={60}
          height={60}
          alt={"Kasbah learn hub"}
        />
      </div>
      <div className="mt-2 flex flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Forgot password</CardTitle>
            <CardDescription>
                Provide the email address associated with your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">

                <div className="grid gap-6">
                  <div className="grid gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.mail@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}              
                    />
                    {error && <div className="mb-2 text-center text-red-600">{error}</div>}
                    {isSent && <div className="mb-2 text-sm text-green-700">If this email exists in our system, a reset link has been sent.</div>}
                  </div>
                  <Button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700"
                    disabled={loading}
                  >
                    {loading ? (
                      <div>
                        <Loader className="animate-spin" />
                      </div>
                    ) : (
                      "Continue"
                    )}
                  </Button>

                  <div className="flex justify-end gap-3">
                    <Link href={'/login'} className="hover:underline duration-200">
                        Login
                    </Link>
                    <Link href={'/signup'} className="hover:underline duration-200">
                        Register
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
