'use client'

import Image from 'next/image'
import React, { FormEvent, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { OAuth } from './o-auth'
import { Label } from '@radix-ui/react-label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import { PhoneInput } from './ui/phone-input'
import { PasswordInput } from './ui/password-input'

import { z } from "zod";
import { Loader } from 'lucide-react'
import { toast } from 'sonner'

const signupSchema = z.object({
    name: z.string().min(1, "Full name is required"),
    phoneNumber: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    r_password: z.string().min(6, "Please retype your password"),
    }).refine((data) => data.password === data.r_password, {
    message: "Passwords do not match",
    path: ["r_password"],
});


export const SignupForm = () => {

    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
    const [formData,setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        password: '',
        r_password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value,
        }));
    };

    // phone-input doesn't accept the above handle change function that takes the value as e: React.ChangeEvent<HTMLInputElement>
    const handlePhoneChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            phoneNumber: value,
        }));  
    };



    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setErrors({});
        setError('');
        const result = signupSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;
            setErrors({
                name: fieldErrors.name?.[0],
                phoneNumber: fieldErrors.phoneNumber?.[0],
                email: fieldErrors.email?.[0],
                password: fieldErrors.password?.[0],
                r_password: fieldErrors.r_password?.[0],
            });
            return;
        }
        setLoading(true)
        try{
            // const response = await register(formData);
            // if(response.status === 200){
                // waiting for backend response 
            // }
            setTimeout(() => {
                setLoading(false)
                toast.success('Registred successfully')
             }, 1500 );
        }catch(err){
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        }finally{
            // setLoading(false)
        }
        
    }
    return (
        <div className='lg:w-[40%] md:w-[60%] w-[95%]'>
            <div className='flex justify-center'>
                <Image src={'/logo/logo-circule-frame-dark.png'} width={60} height={60} alt={'Kasbah learn hub'}/>
            </div>
            <div className="flex flex-col gap-6 mt-2">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Create your account</CardTitle>
                        <CardDescription>Sign up to attend classes, complete quizzes, and monitor your learning journey</CardDescription>
                        <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-300">
                            Already have an account?{" "}
                            <Link href="/login" className="underline underline-offset-4 hover:text-blue-500 duration-200">
                            Sign in
                            </Link>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4">
                           
                            {error && (
                                <div className="text-red-600 text-center mb-2">{error}</div>
                            )}

                            <div className="grid gap-6">

                                <div className='grid grid-cols-2 justify-start items-start gap-2 '>
                                    <div className="grid gap-1">
                                        <Label htmlFor="name">Full name *</Label>
                                        <Input
                                            type="name"
                                            name='name'
                                            placeholder="eg, Joen doe"
                                            onChange={handleChange}
                                        />
                                          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Phone number *</Label>
                                        <div className='flex gap-1'>
                                            <PhoneInput placeholder="Enter a phone number" value={formData.phoneNumber} onChange={handlePhoneChange} name='phoneNumber'/>
                                        </div>
                                        {errors.phoneNumber && <p className="text-red-600 text-sm">{errors.phoneNumber}</p>}
                                    </div>
                                </div>
                                <div className="grid gap-1">
                                    <Label htmlFor="email">Email *</Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="m@example.com"
                                    />
                                    {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
                                </div>

                                <div className='grid items-start grid-cols-2 gap-2'>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Password *</Label>
                                        <PasswordInput value={formData.password} name='password' onChange={handleChange} placeholder='*********'/>
                                        {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Retype password *</Label>
                                        <PasswordInput value={formData.r_password} name='r_password' onChange={handleChange} placeholder='*********'/>
                                        {errors.r_password && <p className="text-red-600 text-sm">{errors.r_password}</p>}
                                    </div>
                                </div>

                                    </div>
                                <div className="grid gap-3">
                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700"
                                        disabled={loading}
                                    >
                                        {
                                        loading ?
                                            <div>
                                                <Loader className='animate-spin'/>
                                            </div>
                                            : "Continue"
                                        }
                                    </Button>
                                </div>
                                
                            </div>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t my-4">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                Or sign up with
                                </span>
                            </div>
                            <OAuth page='Sign up'/>
                        </form>
                    </CardContent>
                </Card>
                <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                    By clicking continue, you agree to our{" "}
                    <Link href="/terms-of-service">Terms of Service</Link> and <Link href="/privacy-policy">Privacy Policy</Link>.
                </div>
            </div>
        </div>
    )
}
