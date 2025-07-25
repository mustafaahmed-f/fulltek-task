import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const AboutPage = () => {
  const technologies = [
    "React 18",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn/ui",
    "React Router",
    "Tanstack Query",
    "Vite",
    "Lucide React"
  ];

  const folderStructure = [
    "src/features/ - Feature-based modules",
    "src/components/ - Shared UI components",
    "src/services/ - API clients and services",
    "src/utils/ - Utility functions",
    "src/types/ - TypeScript type definitions",
    "src/assets/ - Static assets",
    "src/icons/ - Icon components",
    "src/pages/ - Route page components"
  ];

  return (
    <div className="container max-w-screen-2xl py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            About This Template
          </h1>
          <p className="text-muted-foreground max-w-[600px] mx-auto">
            A comprehensive React template designed for scalable enterprise applications
            with modern development practices and tools.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Technologies Used</CardTitle>
              <CardDescription>
                Modern tech stack for efficient development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Architecture</CardTitle>
              <CardDescription>
                Feature-based folder structure for better organization
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {folderStructure.map((item, index) => (
                  <div key={index} className="text-sm">
                    <code className="bg-muted px-2 py-1 rounded text-xs">
                      {item}
                    </code>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <Card>
          <CardHeader>
            <CardTitle>Features Included</CardTitle>
            <CardDescription>
              Everything you need to start building immediately
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h4 className="font-semibold">Development Setup</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Pre-configured providers</li>
                  <li>• Routing with layouts</li>
                  <li>• TypeScript configuration</li>
                  <li>• ESLint and formatting</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">UI Components</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Shadcn/ui component library</li>
                  <li>• Responsive design system</li>
                  <li>• Dark/light mode support</li>
                  <li>• Accessible components</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};