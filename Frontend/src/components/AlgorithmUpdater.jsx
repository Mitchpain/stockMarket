import React from 'react';
import './styles/AlgorithmUpdater.scss';

function AlgorithmUpdater(props) {
    const [newAlgorithm, setNewAlgorithm] = React.useState("");
    return (
        <div id="AlgorithmUpdater">
            <textarea data-testid="textAreaEditAlgorithm" 
            placeholder="New Algorithm. i.e : (price, socialMediaCount) => {return recommendations.BUY;}"
            rows="25" cols="50" 
            onChange={
                (e)=>{setNewAlgorithm(e.target.value)}
            } />
            <button data-testid="buttonEditAlgorithm"
            onClick={()=>
                {props.setNewAlgorithm(newAlgorithm);
                props.setAlgorithmHasChanged(true);
                props.setAlgorithmUpdaterIsDisplayed(false);}}>
                    Edit Algorithm
            </button>
            <button data-testid="buttonCancelEditAlgorithm"
             onClick={()=>
             {props.setAlgorithmUpdaterIsDisplayed(false)}}>
                 Cancel
            </button>
        </div>
    );
};
export default AlgorithmUpdater;