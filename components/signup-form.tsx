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


export const SignupForm = () => {

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
        console.log(formData);
        
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
                           
                            {/* {error && (
                                <div className="text-red-600 text-center mb-2">{error}</div>
                            )} */}

                            <div className="grid gap-6">

                                <div className='grid grid-cols-2 gap-2 '>
                                    <div className="grid gap-1">
                                        <Label htmlFor="name">Full name *</Label>
                                        <Input
                                            type="name"
                                            name='name'
                                            placeholder="eg, Joen doe"
                                            required
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Phone number *</Label>
                                        <div className='flex gap-1'>
                                            <PhoneInput placeholder="Enter a phone number" value={formData.phoneNumber} onChange={handlePhoneChange} name='phoneNumber'/>
                                        </div>
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
                                        required
                                    />
                                </div>

                                <div className='grid grid-cols-2 gap-2'>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Password *</Label>
                                        <PasswordInput value={formData.password} name='password' onChange={handleChange} placeholder='*********'/>
                                    </div>
                                    <div className="grid gap-1">
                                        <Label htmlFor="email">Retype password *</Label>
                                        <PasswordInput value={formData.r_password} name='r_password' onChange={handleChange} placeholder='*********'/>
                                    </div>
                                </div>

                                    </div>
                                <div className="grid gap-3">
                                    <Button
                                        type="submit"
                                        className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700"
                                    >
                                        Continue
                                    </Button>
                                </div>
                                
                            </div>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t mt-2 mb-3">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                Or sign up with
                                </span>
                            </div>
                            <OAuth />
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
