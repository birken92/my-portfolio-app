import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
    return(
        <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>
            <h2>Thomas Birkenes</h2>
            <img 
            src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
            Academic Background: Current postgraduate at Monash University, studying Master of Information Technology. 
            Previous qualifications include Master of International Business at RMIT University and Bachelor of Business at La Trobe University, 
            with specialisation in management, international business, communication, logistic and emerging trends in ICT. 
            </p>
            </Cell>
            <Cell col={6}>
            <h2>Contact me
            </h2>
            <hr></hr>

            <div className="contact-list">
            <List>
                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}> 
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (61) 452 279 132
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}> 
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (61) 452 279 132
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}> 
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    thomasbirkenes@gmail.com
                    </ListItemContent>
                </ListItem>

                <ListItem>
                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}> 
                    <i className="fa fa-skype" aria-hidden="true"/>
                    thomasbirkenes@live.no
                    </ListItemContent>
                </ListItem>

            </List>
            </div>



            </Cell>
        </Grid>
        </div>
    )
    }
}

export default Contact;