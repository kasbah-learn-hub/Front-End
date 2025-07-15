import { SignupForm } from "@/components/signup-form";
import React from "react";

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh w-[100%] flex-col items-center gap-6 p-6 md:p-10">
      <SignupForm />
    </div>
  );
};

export default page;
