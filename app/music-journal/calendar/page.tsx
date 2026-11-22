import { Almendra } from "next/font/google";
import ListeningCalendar from "@/app/components/listening-calendar/listening-calendar";

const almendraFont = Almendra({
  subsets: ["latin"],
  weight: "700",
});

export const metadata = {
  title: "Listening Calendar",
  description: "A month of listening, one album cover per day.",
};

export default function CalendarPage() {
  return (
    <div className={`${almendraFont.className} flex flex-col items-center pt-24 pb-16`}>
      <h1 className="text-2xl mb-8">Listening Calendar</h1>
      <ListeningCalendar />
    </div>
  );
}
