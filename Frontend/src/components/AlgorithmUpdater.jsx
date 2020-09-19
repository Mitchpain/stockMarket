import React from 'react';
import './AlgorithmUpdater.scss';

function AlgorithmUpdater(props) {
    const [newAlgorithm, setNewAlgorithm] = React.useState("");
    return (
        <div id="AlgorithmUpdater">
            <form onSubmit={(e)=>{e.preventDefault(); props.setNewAlgorithm(newAlgorithm); props.setAlgorithmUpdaterIsDisplayed(false);}}>
                <textarea rows="25" cols="50" onChange={(e)=>{setNewAlgorithm(e.target.value)}} />
                <button>Edit Algorithm</button>
            </form>
            <button onClick={()=>{props.setAlgorithmUpdaterIsDisplayed(false)}}>Cancel</button>
        </div>
    );
};
export default AlgorithmUpdater;