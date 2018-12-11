import React from "react";
import Counter from "./counter";

const Counters = ({ onReset, counters, onDelete, onIncrement }) => {
    console.log('Counters - Rendered');

    return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map(counter => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </div>
  );
};

export default Counters;
