import React from 'react';
import AlgorithmUpdater from './AlgorithmUpdater.jsx';

function Header(props) {
    const [algorithmUpdaterIsDisplayed, setAlgorithmUpdaterIsDisplayed] = React.useState(false);
    return (
        <header className="main-header">
            <div className="container">
                <nav className="main-nav">
                    <h1>Stock Market Recommender</h1>
                    <h1 onClick={()=>{setAlgorithmUpdaterIsDisplayed(!algorithmUpdaterIsDisplayed)}} id="updateButton">Update Algorithm</h1>
                </nav>
            </div>
            {algorithmUpdaterIsDisplayed &&
                <div>
                    <AlgorithmUpdater setAlgorithmUpdaterIsDisplayed={setAlgorithmUpdaterIsDisplayed} setNewAlgorithm={props.setNewAlgorithm} setAlgorithmHasChanged={props.setAlgorithmHasChanged} />
                    <div id="shadow"></div>
                </div>
            
            }
        </header>
    );
};
export default Header;