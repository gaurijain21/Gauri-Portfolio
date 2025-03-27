import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(`
        flex h-[48px] 
        rounded-md 
        border border-white/10
        px-4 
        py-2
        text-base
        font-light
        placeholder:text-black
        focus:border-accent
        outline-none

        text-gray-900 
        bg-white

        dark:text-white
        dark-bg-[#27272c]
        `,
        className
      )}
      {...props} />
  );
}

export { Input };
