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
    <div className=" max-w-screen-2xl py-8 px-4 max-sm:overflow-x-scroll h-full">
      <div className="flex flex-col items-center text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            React Template
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A modern React template with feature-based architecture, ready for
            enterprise applications. Built with best practices and
            industry-standard tools.
          </p>
        </div>

        <div className="flex gap-4 flex-wrap">
          <Button asChild size="lg">
            <Link to="/about">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3 w-full max-w-5xl mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};
