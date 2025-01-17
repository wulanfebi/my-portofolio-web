import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const CardComponent = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="w-80 h-80 bg-[#DBD8E3] justify-center border-none items-center">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
export default CardComponent;
