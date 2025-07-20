export default function formatDayAndTime(isoString) {
  // Create a new Date object from the ISO string
  const date = new Date(isoString);

  // Format the full date: day of the week, month, day, and year
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Format the time (e.g., "4:30 AM")
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  // Return the combined string
  return `${formattedDate}, ${formattedTime}`;
}

// Example usage:
const formatted = formatDayAndTime("2025-04-04T04:30:35Z");
console.log(formatted);
