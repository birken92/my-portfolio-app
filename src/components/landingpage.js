import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
    return(
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
            <Cell col={12}>
            <img 
                src="https://cdn1.iconfinder.com/data/icons/avatars-55/100/avatar_profile_user_music_headphones_shirt_cool-512.png"
                alt="thomas"
                className="thomas-img"
            />
            <div className="banner-text">
                <h1>Full Stack Web Developer</h1>
                <hr />

                <p>
                Cyber Security | HTML/CSS | Java | SQL | React | React Native | Shell Script | Python
                </p>
                <div className="social-links">
                {/*LinkedIn link */}
                 <a href="https://www.linkedin.com/in/thomas-birkenes" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                 </a>
                 {/*GitHub link */}
                 <a href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                 </a>
                </div>
            </div>
            </Cell>
            </Grid>
        </div>
    )
    }
}

export default Landing;