import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Bell, Shield, Palette, Database } from "lucide-react";

export const SettingsPage = () => {
  const settingsCategories = [
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage your notification preferences",
      settings: [
        { id: "email-notifications", label: "Email notifications", enabled: true },
        { id: "push-notifications", label: "Push notifications", enabled: false },
        { id: "marketing-emails", label: "Marketing emails", enabled: true },
      ]
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Control your privacy and security settings",
      settings: [
        { id: "two-factor", label: "Two-factor authentication", enabled: true },
        { id: "activity-log", label: "Activity logging", enabled: true },
        { id: "data-sharing", label: "Anonymous usage data", enabled: false },
      ]
    },
    {
      icon: Palette,
      title: "Appearance",
      description: "Customize your app appearance",
      settings: [
        { id: "dark-mode", label: "Dark mode", enabled: false },
        { id: "compact-view", label: "Compact view", enabled: false },
        { id: "animations", label: "Enable animations", enabled: true },
      ]
    },
    {
      icon: Database,
      title: "Data & Storage",
      description: "Manage your data and storage preferences",
      settings: [
        { id: "auto-sync", label: "Auto-sync data", enabled: true },
        { id: "offline-mode", label: "Offline mode", enabled: false },
        { id: "cache-data", label: "Cache data locally", enabled: true },
      ]
    }
  ];

  return (
    <div className="container max-w-screen-2xl py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Settings
          </h1>
          <p className="text-muted-foreground">
            Customize your application preferences and settings
          </p>
        </div>

        <div className="grid gap-6">
          {settingsCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle>{category.title}</CardTitle>
                  </div>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={setting.id}>
                      <div className="flex items-center justify-between">
                        <Label htmlFor={setting.id} className="flex-1 cursor-pointer">
                          {setting.label}
                        </Label>
                        <Switch
                          id={setting.id}
                          defaultChecked={setting.enabled}
                        />
                      </div>
                      {settingIndex < category.settings.length - 1 && (
                        <Separator className="mt-4" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
            <CardDescription>
              Irreversible and destructive actions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
              <div>
                <h4 className="font-semibold">Delete Account</h4>
                <p className="text-sm text-muted-foreground">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};