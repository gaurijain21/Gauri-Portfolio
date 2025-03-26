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
      className={cn(
        "flex h-[48px] rounded-md text-gray-900 dark:text-white border border-white/10 focus:border-accent font-light px-4 py-5 text-base placeholder:text-black outline-none",
        className
      )}
      {...props} />
  );
}

export { Input };
