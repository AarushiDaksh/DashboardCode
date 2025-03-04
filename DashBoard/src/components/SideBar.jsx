import { HomeIcon, CalendarIcon, ChartBarIcon, UsersIcon, CogIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Event Dashboard</h2>
      <nav className="space-y-4">
        <NavItem icon={HomeIcon} title="Dashboard" />
        <NavItem icon={CalendarIcon} title="Calendar" />
        <NavItem icon={ChartBarIcon} title="Analytics" />
        <NavItem icon={UsersIcon} title="Team" />
        <NavItem icon={CogIcon} title="Settings" />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon: Icon, title }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-lg cursor-pointer">
    <Icon className="w-6 h-6" />
    <span className="text-lg">{title}</span>
  </div>
);

export default Sidebar;
