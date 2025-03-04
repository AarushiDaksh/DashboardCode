// src/components/SummaryCards.jsx
const SummaryCards = () => {
    const stats = [
      { title: "Total Events", count: 24, color: "bg-primary" },
      { title: "Ended Events", count: 10, color: "bg-gray-700" },
      { title: "Running Events", count: 12, color: "bg-accent" },
      { title: "Pending Events", count: 2, color: "bg-gray-500" },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`p-4 ${stat.color} text-white rounded-lg shadow-lg`}>
            <h3 className="text-lg">{stat.title}</h3>
            <p className="text-2xl font-bold">{stat.count}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default SummaryCards;
  