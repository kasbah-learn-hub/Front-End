import { SignupForm } from '@/components/signup-form'
import React from 'react'

const page = () => {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center w-[100%] gap-6 p-6 md:p-10">
            <SignupForm />
        </div>
    )
}


export default page