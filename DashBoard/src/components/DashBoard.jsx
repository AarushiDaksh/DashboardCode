import EventCard from "./EventCard";
import EventAnalytics from "./EventAnalytics";
import ProgressChart from "./ProgressChart";
import TimeTracker from "./TimeTracker";

const Dashboard = () => {
  return (
    <main className="flex-1 bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">CodeTikki</h1>
      

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <EventCard title="Total Events" count={24} bgColor="bg-orange-500" />
        <EventCard title="Ended Events" count={10} bgColor="bg-gray-700" />
        <EventCard title="Running Events" count={12} bgColor="bg-green-500" />
        <EventCard title="Pending Events" count={2} bgColor="bg-gray-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <EventAnalytics />
        <ProgressChart />
      </div>

      <div className="mt-6">
        <TimeTracker />
      </div>
    </main>
  );
};

export default Dashboard;
