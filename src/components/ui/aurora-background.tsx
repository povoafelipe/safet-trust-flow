import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-background transition-bg",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--aurora-primary:hsl(220,100%,56%)]
            [--aurora-accent:hsl(179,100%,39%)]
            [--aurora-white:hsl(0,0%,100%)]
            pointer-events-none absolute -inset-[10px] opacity-50 will-change-transform
            [background-image:radial-gradient(circle_at_center,_var(--aurora-primary)_10%,_transparent_50%),radial-gradient(circle_at_center,_var(--aurora-accent)_10%,_transparent_50%)]
            [background-position:50%_50%,50%_50%]
            [background-size:80%_80%,70%_70%]
            blur-[10px]
            after:absolute after:-inset-[10px] after:animate-aurora
            after:opacity-50 after:blur-[30px]
            after:[background-attachment:fixed]
            after:[background-image:radial-gradient(circle_at_center,_var(--aurora-accent)_20%,_transparent_60%),radial-gradient(circle_at_center,_var(--aurora-primary)_20%,_transparent_60%)]
            after:[background-size:200%_200%,180%_180%]
            dark:opacity-40`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        ></div>
      </div>
      {children}
    </div>
  );
};
