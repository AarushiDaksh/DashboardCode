// src/components/TopNavBar.jsx
const TopNavBar = () => {
    return (
      <div className="bg-secondary text-white p-4 flex justify-between items-center">
        <input type="text" placeholder="Search task..." className="p-2 rounded bg-gray-800 text-white w-1/3" />
        <button className="bg-primary text-white px-4 py-2 rounded">+ Add Event</button>
      </div>
    );
  };
  
  export default TopNavBar;
  