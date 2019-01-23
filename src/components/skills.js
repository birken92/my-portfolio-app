import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={4}>
                    <h3 style={{marginTop: '0px'}}>{this.props.skill} </h3>
                </Cell>
                <Cell col={8}>      
                    <p style={{marginTop:'1px'}}>{this.props.aboutSkill} </p>
                </Cell>
            </Grid> 
        )
    }
}

export default Skills;