import { GitCommit, Clock, Globe } from "lucide-react";

interface LastCommitProps {
  date?: string;
  time?: string;
}

export const LastCommit = ({ date, time }: LastCommitProps) => {
  if (!date || !time) return null;

  // Format date from DD/MM/YYYY to Day `Month Year
  const formatDate = (dateStr: string) => {
    try {
      // Handle different possible date formats
      const parts = dateStr.includes("/")
        ? dateStr.split("/")
        : dateStr.includes("-")
        ? dateStr.split("-")
        : null;

      if (!parts) return dateStr;

      let day, month, year;

      if (parts[0].length === 4) {
        // YYYY-MM-DD format
        [year, month, day] = parts;
      } else {
        // DD/MM/YYYY format
        [day, month, year] = parts;
      }

      const date = new Date(Number(year), Number(month) - 1, Number(day));

      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "Asia/Kolkata",
      });
    } catch (error) {
      return dateStr; // Return original if parsing fails
    }
  };

  // Format time from HH:MM:SS to h:MM AM/PM
  const formatTime = (timeStr: string) => {
    try {
      const [hours, minutes] = timeStr.split(":");
      const h = Number(hours);
      const ampm = h >= 12 ? "AM" : "PM";
      const formattedHours = h % 12 || 12; // Convert 0 to 12 for 12 AM

      return `${formattedHours}:${minutes} ${ampm}`;
    } catch (error) {
      return timeStr; // Return original if parsing fails
    }
  };

  const formattedDate = formatDate(date);
  const formattedTime = formatTime(time);

  return (
    <div className="my-6">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/20 dark:to-indigo-900/20 blur-3xl opacity-70"></div>

        <h3 className="text-sm font-light text-slate-500 dark:text-slate-400 mb-3 flex items-center opacity-40">
          <GitCommit className="w-4 h-4 mr-2 text-indigo-500" />
          Last GitHub Activity
        </h3>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center bg-white dark:bg-slate-800/60 px-4 py-2 rounded-full shadow-sm">
            <span className="text-slate-700 dark:text-slate-300 font-light text-[12px] sm:text-[12px]">
              {formattedDate}
            </span>
          </div>

          <div className="flex items-center bg-white dark:bg-slate-800/60 px-4 py-2 rounded-full shadow-sm">
            <Clock className="w-4 h-4 mr-2 text-indigo-400" />
            <span className="text-slate-700 dark:text-slate-300 font-light text-[12px] sm:text-[12px]">
              {formattedTime}
            </span>
          </div>

          <div className="flex items-center bg-white/70 dark:bg-slate-800/40 px-4 py-2 rounded-full shadow-sm backdrop-blur-sm">
            <Globe className="w-4 h-4 mr-2 text-emerald-400" />
            <span className="text-slate-700 dark:text-slate-300 font-light text-[12px] sm:text-[12px]">
              IST
            </span>
          </div>
        </div>

        <div className="mt-4 text-xs font-light text-slate-500 dark:text-slate-400 opacity-40">
          Keeping the code fresh and updated
        </div>
      </div>
    </div>
  );
};
