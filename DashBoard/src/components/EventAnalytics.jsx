import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "S", events: 2 },
  { day: "M", events: 5 },
  { day: "T", events: 8 },
  { day: "W", events: 7 },
  { day: "T", events: 6 },
  { day: "F", events: 4 },
];

const EventAnalytics = () => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">Event Analytics</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="events" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EventAnalytics;
