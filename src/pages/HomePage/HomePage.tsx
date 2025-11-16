import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Code, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import TicketsTabs from "./subComponents/TicketsTabs";

export const HomePage = () => {
  const features = [
    {
      icon: Code,
      title: "Feature-Based Architecture",
      description:
        "Organized code structure with features, components, and services for better maintainability.",
    },
    {
      icon: Layers,
      title: "Modern Stack",
      description:
        "Built with React, TypeScript, Tailwind CSS, Shadcn/ui, and Tanstack Query.",
    },
    {
      icon: Zap,
      title: "Developer Ready",
      description:
        "Pre-configured routing, providers, and folder structure to get you started quickly.",
    },
  ];

  return (
    <div className=" max-w-screen-2xl max-sm:overflow-x-scroll h-full">
      <TicketsTabs />
    </div>
  );
};
