"use client";

import React, { FormEvent, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { PasswordInput } from "./ui/password-input";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import z from "zod";
// import { login } from '@/services/auth'

const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    r_password: z.string().min(6, "Please retype your password"),
  })
  .refine((data) => data.password === data.r_password, {
    message: "Passwords do not match",
    path: ["r_password"],
  });

type ResetPasswordErrors = {
    password?: string,
    r_password?: string
}

const ResetPasswordForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error,setError] = useState<string>('');
  const [errors,setErrors] = useState<ResetPasswordErrors>({password:'', r_password:''})
  const [formData, setFormData] = useState({
    password: "",
    r_password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // trying UI
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    

    const result = resetPasswordSchema.safeParse(formData);
    if (!result.success) {
        const fieldErrors = result.error.flatten().fieldErrors;
        setErrors({
          password: fieldErrors.password?.[0],
          r_password: fieldErrors.r_password?.[0],
        });
        return;
    }
    if (!result.success) {
        setLoading(false);
        return;
    }
    setLoading(true);
    try {
      setTimeout(() => {
        setLoading(false);
        toast.success("Password has been reseted");
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
            <CardTitle className="text-xl">Reset password</CardTitle>
            <CardDescription>
                Create a new password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                {error && <div className="mb-2 text-center text-red-600">{error}</div>}

                <div className="grid gap-6">
                  <div className="grid gap-1">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput
                      name="password"
                      placeholder="********"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    {
                        errors.password && <div className="text-sm text-red-600">{errors.password}</div>
                    }
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="r_password">Retype password</Label>
                    <PasswordInput
                      name="r_password"
                      placeholder="********"
                      value={formData.r_password}
                      onChange={handleChange}
                    />
                    {
                        errors.r_password && <div className="text-sm text-red-600">{errors.r_password}</div>
                    }
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
                      "Update password"
                    )}
                  </Button>
                  <div className="flex justify-end gap-3">
                    <Link href={'/login'} className="hover:underline duration-200">
                        Back to login
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

export default ResetPasswordForm;
