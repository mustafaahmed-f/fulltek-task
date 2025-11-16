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
import { useState } from "react";

export const HomePage = () => {
  const [activeTicket, setActiveTicket] = useState(1);
  return (
    <div className="h-full max-w-screen-2xl max-sm:overflow-x-scroll">
      <TicketsTabs
        activeTicket={activeTicket}
        setActiveTicket={setActiveTicket}
      />
    </div>
  );
};
