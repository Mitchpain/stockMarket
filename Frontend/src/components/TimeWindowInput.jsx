import React from 'react';

function TimeWindowInput(props) {

  return (
    <input type="number" min="1" placeholder="Time window" defaultValue={props.timeWindow}
    onChange={(e)=>{
      if(e.target.value > 0){
        props.onChangeTimeWindow(e.target.value);
      }
      }
      } />
  );
};

export default TimeWindowInput;
