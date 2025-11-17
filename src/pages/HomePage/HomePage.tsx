import { useState } from "react";
import MainSection from "./subComponents/MainSection";
import TicketsTabs from "./subComponents/TicketsTabs";
import { useAtom } from "jotai";
import { CurrentTicketAtom } from "@/atoms/CurrentTicketAtom";

export const HomePage = () => {
  return (
    <div className="h-full max-sm:overflow-x-scroll">
      <TicketsTabs />
      <MainSection />
    </div>
  );
};
