const EventCard = ({ title, count, bgColor }) => {
    return (
      <div className={`p-5 rounded-lg ${bgColor} text-white shadow-md h-24 flex flex-col justify-center`}>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-3xl font-bold">{count}</p>
      </div>
    );
  };
  
  export default EventCard;
  