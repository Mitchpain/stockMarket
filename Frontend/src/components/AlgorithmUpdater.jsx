import React from 'react';
import './AlgorithmUpdater.scss';

function AlgorithmUpdater(props) {
    const [newAlgorithm, setNewAlgorithm] = React.useState("");
    return (
        <div id="AlgorithmUpdater">
            <form onSubmit={
                (e)=>{e.preventDefault();
                props.setNewAlgorithm(newAlgorithm);
                props.setAlgorithmHasChanged(true);
                props.setAlgorithmUpdaterIsDisplayed(false);
            }}>
                <textarea data-testid="textAreaEditAlgorithm" 
                rows="25" cols="50" 
                onChange={
                    (e)=>{setNewAlgorithm(e.target.value)}
                } />
                <button data-testid="buttonEditAlgorithm">
                    Edit Algorithm
                </button>
            </form>
            <button data-testid="buttonCancelEditAlgorithm"
             onClick={()=>
             {props.setAlgorithmUpdaterIsDisplayed(false)}}>
                 Cancel
            </button>
        </div>
    );
};
export default AlgorithmUpdater;