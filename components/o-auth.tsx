import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export const OAuth = () => {
    return (
        <div className='flex flex-col gap-3'>
            <Button
                variant="outline"
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-5"
                type="button"
            >
                <Image src={'/icons/google.svg'} width={25} height={25} alt="google icon" />
                Sign in with google
            </Button>

            <Button
                variant="outline"
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-5"
                type="button"
            >
                <Image src={'/icons/facebook.svg'} width={25} height={25} alt="google icon" />
                Sign in with facebook
            </Button>

            <Button
                variant="outline"
                className="w-full cursor-pointer flex items-center justify-center gap-2 py-5"
                type="button"
            >
                <Image src={'/icons/linkedin.svg'} width={20} height={20} alt="google icon" />
                Sign in with linkedin
            </Button>
        </div>
    )
}
