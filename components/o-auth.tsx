import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

export const OAuth = ({ page }: { page: string }) => {
  return (
    <div className="flex flex-col gap-3">
      <Button
        variant="outline"
        className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
        type="button"
      >
        <Image src={"/icons/google.svg"} width={25} height={25} alt="google icon" />
        {page} with Google
      </Button>

      <Button
        variant="outline"
        className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
        type="button"
      >
        <Image src={"/icons/facebook.svg"} width={25} height={25} alt="facebook icon" />
        {page} with Facebook
      </Button>

      <Button
        variant="outline"
        className="flex w-full cursor-pointer items-center justify-center gap-2 py-5"
        type="button"
      >
        <Image
          src={"/icons/github.svg"}
          width={20}
          height={20}
          alt="github icon"
          className="dark:invert-0"
        />
        {page} with Github
      </Button>
    </div>
  );
};
