import { useState } from "react";

const TimeTracker = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setInterval(() => setTime((prev) => prev + 1), 1000);
    }
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold mb-3">Time Tracker</h2>
      <p className="text-3xl font-mono">{new Date(time * 1000).toISOString().substr(11, 8)}</p>
      <button onClick={toggleTimer} className="mt-3 px-4 py-2 bg-blue-500 text-white rounded">
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default TimeTracker;
