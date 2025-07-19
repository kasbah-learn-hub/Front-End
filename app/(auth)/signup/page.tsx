import { SignupForm } from "@/components/signup-form";
import React from "react";
import { type Metadata } from "next";


export const metadata: Metadata = {
  title: 'Register | Kasbah Learn Hub',
  description:
    'Create your free account on Kasbah Learn Hub and start your journey toward accessible, engaging, and effective education today.',
  robots: 'noindex, nofollow',
  keywords: ['Kasbah Learn Hub', 'register', 'sign up', 'create account', 'education platform', 'online learning'],
  openGraph: {
    title: 'Register | Kasbah Learn Hub',
    description: 'Join Kasbah Learn Hub and unlock access to interactive courses and global learning opportunities.',
    // not setted yet
    // url: 'https://kasbahlearnhub.com/register',
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
    <div className="bg-muted flex min-h-svh w-[100%] flex-col items-center gap-6 p-6 md:p-10">
      <SignupForm />
    </div>
  );
};

export default page;
