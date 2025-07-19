import LoginForm from "@/components/login-form";
import { type Metadata } from "next";
import React from "react";

export const metadata:Metadata = {
  title: 'Login | Kasbah Learn Hub',
  description:
    'Sign in to Kasbah Learn Hub — your gateway to quality education, interactive learning tools, and a global knowledge community.',
  robots: 'noindex, nofollow',
  keywords: ['Kasbah Learn Hub', 'login', 'sign in', 'education platform', 'online learning', 'student portal'],
  openGraph: {
    title: 'Login | Kasbah Learn Hub',
    description: 'Access your personalized learning dashboard at Kasbah Learn Hub.',
    // not setted yet
    // url: 'https://kasbahlearnhub.com/login',
    // images: [
    //   {
    //     url: 'https://kasbahlearnhub.com/og-image.jpg',
    //     width: 800,
    //     height: 600,
    //     alt: 'Kasbah Learn Hub',
    //   },
    // ],
  },
};


const page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <LoginForm />
    </div>
  );
};

export default page;
