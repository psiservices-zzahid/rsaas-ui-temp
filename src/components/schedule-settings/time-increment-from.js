import React from "react";

export default function TimeIncrementForm() {
  return (
    <div className="row border-top">
      <form>
        <label htmlFor="time_increment">
          <b>Time Slot Increment </b>(in minutes)
        </label>
        <input
          type="text"
          id="time_increment"
          name="timeInc"
          placeholder="Enter Increment"
        />
      </form>
    </div>
  );
}
