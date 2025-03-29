const unixTime = (timestamp) => {

    const date = new Date(timestamp * 1000); // Convert from seconds to milliseconds
    const timeOnly = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Change to true for 12-hour format
      });
    return timeOnly
}

export default unixTime