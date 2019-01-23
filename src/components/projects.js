import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

toggleCategories () {

    if (this.state.activeTab === 0) {
        return (
            <div className="projects-grid">
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
                React Project #1
                </CardTitle>
                <CardText>
                    First React Project done by me
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />>
                </CardMenu>
            </Card>
            {/* Project 2*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
                React Project #1
                </CardTitle>
                <CardText>
                    First React Project done by me
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />>
                </CardMenu>
            </Card>
            {/* Project 3*/}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
                React Project #1
                </CardTitle>
                <CardText>
                    First React Project done by me
                </CardText>
                <CardActions border>
                    <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                    <Button colored>CodePen</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />>
                </CardMenu>
            </Card>
            </div>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
            React Project #1
            </CardTitle>
            <CardText>
                First React Project done by me
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />>
            </CardMenu>
        </Card>
        )
    } else if (this.state.activeTab === 2) {
        return (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
            React Project #1
            </CardTitle>
            <CardText>
                First React Project done by me
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />>
            </CardMenu>
        </Card>
        )
    } else if (this.state.activeTab === 3) {
        return (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
            React Project #1
            </CardTitle>
            <CardText>
                First React Project done by me
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />>
            </CardMenu>
        </Card>
        )
    } else if (this.state.activeTab === 4) {
        return (
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://react-etc.net/files/2017-12/react-hexagon.png) center /cover'}}>
            React Project #1
            </CardTitle>
            <CardText>
                First React Project done by me
            </CardText>
            <CardActions border>
                <Button colored href="https://github.com/birken92" rel="noopener noreferrer" target="_blank">GitHub</Button>
                <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />>
            </CardMenu>
        </Card>
        )
    } 
}


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React/HTML/CSS</Tab>
                    <Tab>Java</Tab>
                    <Tab>Python</Tab>
                    <Tab>SQL</Tab>
                    <Tab>Shell Script</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>  
            </div>    
        );
    }
}

export default Projects;