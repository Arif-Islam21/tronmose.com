import React, { useState, useEffect } from "react";
import axios from "axios";

const CountdownTimer = () => {
  const [time, setTime] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [isError, setIsError] = useState(false); // To handle error state

  // Fetch the initial time from the API
  const fetchTimeFromAPI = async () => {
    try {
      const response = await axios.get("api/task/time"); // Replace with your API URL
      const { hoursLeft, minutesLeft, secondsLeft } = response.data;

      if (hoursLeft || minutesLeft || secondsLeft) {
        setTime({
          hours: hoursLeft,
          minutes: minutesLeft,
          seconds: secondsLeft,
        });
        setIsError(false); // Reset error state if response is successful
      } else {
        setIsError(true); // If API returns no valid time data
      }
    } catch (error) {
      console.error("Error fetching time:", error);
      setIsError(true); // Set error state if there's an error
    }
  };

  // Function to decrease time
  const tick = () => {
    setTime((prevTime) => {
      const { hours, minutes, seconds } = prevTime;

      if (hours === 0 && minutes === 0 && seconds === 0) {
        setIsTimeUp(true);
        return prevTime; // Return unchanged time
      } else if (seconds > 0) {
        return { hours, minutes, seconds: seconds - 1 };
      } else if (minutes > 0) {
        return { hours, minutes: minutes - 1, seconds: 59 };
      } else if (hours > 0) {
        return { hours: hours - 1, minutes: 59, seconds: 59 };
      }

      return prevTime; // Return unchanged time if nothing changes
    });
  };

  // useEffect to fetch time on component mount
  useEffect(() => {
    fetchTimeFromAPI(); // Fetch time when component mounts

    const timerId = setInterval(() => tick(), 1000);

    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      {isError ? ( // Show 0 0 0 if there's an error fetching time
        <span>Time's up!</span>
      ) : isTimeUp ? (
        <span>Time's up!</span>
      ) : (
        <div>
          <span>{time.hours.toString().padStart(2, "0")} : </span>
          <span>{time.minutes.toString().padStart(2, "0")} : </span>
          <span>{time.seconds.toString().padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
};

export default CountdownTimer;
