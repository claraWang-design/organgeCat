import React from 'react'
import './Events.css';

function Events() {
    return (
        <>
            <div className="events">
                <div className="events__image"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80)` }}>
                </div>
                <div className="events__body">
                    <div className="events__header">
                        <h2>Regain Body Positivity</h2>
                    </div>
                    <div className="events__text">
                        <p>Wednesday, Sep 15th, 2021</p>
                        <p>Central Library</p>
                    </div>
                </div>
            </div>

            <div className="events">
                <div className="events__image"
                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1554497342-902a4f8da8ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)` }}>
                </div>
                <div className="events__body">
                    <div className="events__header">
                        <h2>You Define Who You Are</h2>
                    </div>
                    <div className="events__text">
                        <p>Friday, Sep 17th, 2021</p>
                        <p>Univeristy of Wathington</p>
                    </div>
                </div>
            </div>

            <div className="events">
                <div className="events__image"
                    style={{ backgroundImage: `url(https://lh5.googleusercontent.com/9F_TzcAvLn8exCXtjJXgLT0Em3lO3CiJDLzOvnTFzEnfN3xWuji4GxwwsDUa8RXPqyZwcjYxoRsCitNMw6NDeLoHUeX2RMySAXneQmvX7md4RY8T80OPp9uSoKyhhSDdHfWSDPQH)` }}>
                </div>
                <div className="events__body">
                    <div className="events__header">
                        <h2>Overcoming Bulimia</h2>
                    </div>
                    <div className="events__text">
                        <p>Saturday, Sep 18th, 2021</p>
                        <p>Bellvue College</p>
                    </div>
                </div>
            </div>

            <div className="events">
                <div className="events__image"
                    style={{ backgroundImage: `url(https://wilsoncriminaldefence.com/wp-content/uploads/2020/04/Making-Use-of-a-Diary-or-Journal-at-Trial-1024x1024.jpg)` }}>
                </div>
                <div className="events__body">
                    <div className="events__header">
                        <h2>What is Self-Reporting</h2>
                    </div>
                    <div className="events__text">
                        <p>Wednesday, Sep 22th, 2021</p>
                        <p>Central Library</p>
                    </div>
                    
                </div>
            </div>

            <div className="events">
                <div className="events__image"
                    style={{ backgroundImage: `url(https://www.waldenu.edu/-/media/walden/images/seo-article/seo-334-bs-chiang-mai-thailand-mar-301550875-1200x675.jpg?rev=199b6dafc68d485584527d35a7f7080d&hash=A869FBA6D1ED7E6BC57AE70F4CC907B1)` }}>
                </div>
                <div className="events__body">
                    <div className="events__header">
                        <h2>Social Eating Disorders</h2>
                    </div>
                    <div className="events__text">
                        <p>Friday, Sep 25th, 2021</p>
                        <p>Bellevue College</p>
                    </div>
                </div>
            </div>
            <br/>
            <p><span>      </span>See More</p>
        </>
    )
}

export default Events
