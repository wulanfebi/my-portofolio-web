import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CardComponent = ({
  title,
  children,
  description
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) => {
  return (
    <Card className="w-80 h-80 bg-[#DBD8E3] overflow-y-auto justify-center border-none items-center">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="my-3">{children}</CardContent>
      <style jsx>{`
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
