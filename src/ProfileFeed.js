
import './Feed.css';



function ProfileFeed() {

    return (
        <div className="feed__profile">
            {/* Header */}
            <div className="feed__header">
                <h1>My Profile</h1>

                <div className="avatar">

                </div>

                <h2>Jasmine Carr</h2>

                <br/>
                <br/>
                <br/>

                <h1>My Insights</h1>
                <div className="insights">
                <ul>
                    <li>You are more likely to have negative thoughts and feelings at night time</li>
                    <li>You are more likely to vomit at night time</li>
                    <li>You always trigger from relationship</li>
                </ul>
                </div>
            </div>

        </div>
    );
}

export default ProfileFeed;
