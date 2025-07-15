import ForgotPasswordForm from "@/components/forgot-password-form";
import React from "react";

const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <ForgotPasswordForm />
    </div>
  );
};

export default page;
