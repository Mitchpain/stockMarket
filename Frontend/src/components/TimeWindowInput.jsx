import React from 'react';

function TimeWindowInput(props) {

  return (
    <div className="inputContainer">
      <input type="number" min="1" placeholder="Time window" value={props.timeWindow}
        onChange={(e)=>{
          if(e.target.value > 0){
            props.onChangeTimeWindow(e.target.value);
          }}
        }
      />
      <span>Time Window (days)</span>
    </div>
  );
};

export default TimeWindowInput;
