import React from 'react';
import Events from "./Events";
import './Widgets.css';
import './Events.css';

function Widgets() {
    return (
        <div className="Widgets">
            <div className="widgets__header">
            <h1>Workshops</h1>
            </div>
            <div>
            <Events />
            </div>
        </div>
    )
}

export default Widgets
