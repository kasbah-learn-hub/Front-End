'use client'

import React from 'react'
import { OAuth } from './o-auth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import Link from 'next/link'
import { Button } from './ui/button'

const LoginForm = () => {
    return (
        <div>
            <div className="flex flex-col gap-6">
            <Card>
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Welcome back</CardTitle>
                    <CardDescription>Login with your Google account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid gap-6">

                        <OAuth />
                        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                            <span className="bg-card text-muted-foreground relative z-10 px-2">
                            Or
                            </span>
                        </div>

                        {/* {error && (
                            <div className="text-red-600 text-center mb-2">{error}</div>
                        )} */}

                        <div className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-3">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                    href="/forgot-password"
                                    className="ml-auto text-sm underline-offset-4 hover:underline"
                                    >
                                    Forgot your password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    required
                                />
                                </div>
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-600 cursor-pointer hover:bg-blue-700"
                                >
                                    Login
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/signup" className="underline underline-offset-4">
                                Sign up
                                </Link>
                            </div>
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