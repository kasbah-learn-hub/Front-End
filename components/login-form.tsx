'use client'

import React, { FormEvent, useState } from 'react'
import { OAuth } from './o-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import { PasswordInput } from './ui/password-input'
import { Loader } from 'lucide-react'
import { toast } from 'sonner'
// import { login } from '@/services/auth'

const LoginForm = () => {

    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<string>('')
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    // trying UI
    const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        setLoading(true)
        setError('')
        try{
            // const response = await login(formData);
            // if(response.status === 200){
                // redirecting to dashboard based on the role
            // }
            setTimeout(() => {
               setLoading(false)
               toast.success('Logged in successfully')
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
    <div className='lg:w-[30%] md:w-[60%] w-[95%]'>
            <div className='flex justify-center'>
                <Image src={'/logo/logo-circule-frame-dark.png'} width={60} height={60} alt={'Kasbah learn hub'}/>
            </div>
            <div className="flex flex-col gap-6 mt-2">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>Log in to access your courses, progress, and learning materials.</CardDescription>
                    <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-300">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="underline underline-offset-4 hover:text-blue-500 duration-200">
                            Sign up
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
                            <div className="grid gap-1">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid gap-1">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                    href="/forgot-password"
                                    className="ml-auto text-sm underline-offset-4 hover:underline"
                                    >
                                    Forgot your password?
                                    </Link>
                                </div>
                                <PasswordInput value={formData.password} onChange={handleChange} name='password' placeholder='*********'/>
                                
                                </div>
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
                                        : "Login"
                                    }
                                </Button>
                            </div>
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                Or sign in with
                                </span>
                            </div>
                            <OAuth page='Sign in'/>   
                        </div>
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


export default LoginForm