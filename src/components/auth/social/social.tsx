"use client"

import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full bg-[#3e3e42] border-0"
        variant="outline"
        onClick={() => {}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size="lg"
        className="w-full bg-[#3e3e42] border-0"
        variant="outline"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5 text-white" />
      </Button>
    </div>
  )
}
