import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CardComponent = ({
  title,
  children,
  description,
  className
}: {
  title?: string;
  children: React.ReactNode;
  description?: string;
  className?: string;
}) => {
  return (
    <Card className={`w-80 h-80 bg-gradient-to-tl from-zinc-900/80 to-zinc-800/50  border border-white/10 overflow-y-auto justify-center border-none items-center ${className}`}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="my-3">{children}</CardContent>
      <style>{`
        .overflow-y-auto {
          overflow-y: auto;
        }
        .overflow-y-auto::-webkit-scrollbar {
          display: none;  /* Menyembunyikan scrollbar */
        }
      `}</style>
    </Card>
  );
};
export default CardComponent;
