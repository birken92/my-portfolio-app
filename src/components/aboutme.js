import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Tabs, Tab, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories () {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                <Grid>
                    <Cell col={4}>
                {/* Project 1 */}
                <h2 style={{paddingTop: '0em'}}>Thomas Birkenes</h2>
                <hr style={{borderTOp: '3px solid #833fb2', width: '50%'}}/>
                <h5><b>Address</b></h5>
                <p>My address</p>
                <h5><b>Phone</b></h5>
                <p>(61) 452 279 132</p>
                <h5><b>Email</b></h5>
                <p>thomasbirkenes@gmail.com</p>
                <h5><b>Webside</b></h5>
                <p>thomasbirkenes.com</p>
                <hr style={{borderTOp: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell col={8}>
                    <h4 style={{color: 'grey', paddingTop: '1em'}}><b>Full Stack Developer</b></h4>
                    <p style={{paddingTop: '2em'}}>While studying at RMIT University and working on Hobspot app, I gained an increase interest in working in the IT industry and especially cyber security. 
                    Cyber security is a field where I can utilise my business degree and IT degree. Utilising skills such as creating policies, management, communication and consulting. 
                    This makes me a unique employee, with the ability to understand business targets and complex IT technologies, languages and design. 
                    </p>
                    <p>Professional Background: Result-oriented and dedicated post-graduate Data Analyst/Data Scientist. I have experience in office and field positions with strong management, 
                    leadership, organisational and communication skills that have been developed over work experience, 
                    University and volunteering at academic, work and community level. Well-developed research, analytical thinking, 
                    problem solving and statistical skills and a quick, hard-working learning. An honest, open communicator who forms productive partnerships with contributors across all functions and business levels and has a record of success in training and mentoring individuals. Business specialisation include management, international business, communication, logistic and emerging trends in ICT.
                    </p>
                    </Cell>
                </Grid>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                <Grid>
                <Cell col={4}>
                <img className="monash" src="https://www.monash.edu/__data/assets/git_bridge/0006/509343/deploy/mysource_files/monash-logo-mono.svg"/>
                </Cell>
                <Cell col={8}>
                <Education 
                startYear={2018}
                endYear="current"
                schoolName="Monash University"
                degree="Master of Information Technology"
                schoolDescription="Working on critically analyse advanced algorithms and information technologies. Utilising skills to effectively deal with issues within security, software engineering, database design, data management or big data processing. 
                Courses and topics include:
                -	Analyse critically advanced algorithms and information technologies
                -	Design and construct innovative information technology solutions
                -	Extend and generalise existing advanced information technology techniques in relevant contexts and evaluate the efficacy of such extensions
                -	Communicate solutions to stakeholders"
                />
                <hr style={{borderToP: '3px solid #e22947'}}/>
                <Education
                startYear={2016}
                endYear={2017}
                schoolName="RMIT University"
                degree="Master of International Business"
                schoolDescription="Investigate complex problems and address the important challenges of sustainable international business. Working on real business skills and creative problem-solving techniques. Using agile approach to analyse and tackling problem solving in new ways. 
                Utilising consulting and management skills directly to the market to solve problems."
                />
                <hr style={{borderToP: '3px solid #e22947'}}/>
                <Education
                startYear={2012}
                endYear={2015}
                schoolName="La Trobe University"
                degree="Bachelor of Business"
                schoolDescription="Developing knowledge skills and professional development to succeed in the changing global business workforce. 
                Utilising analytical, organisational and interpersonal skills to design solutions for organisations. Utilising my skills to solve key business challenges and make a difference to society, policy and organisations."
                />
                </Cell> 
                </Grid>
                </div> 
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div> 
                <Experience 
                startMonth="July"
                startYear={2016}
                endMonth="Current"
                organisation="Phoenix Auction"
                jobName="Office Administrator"
                jobDescription="•	Provide outstanding customer service 
                •	Customer engagement and communication 
                •	Take care of customer complaints and engagement. 
                •	Undertake office administration. 
                •	Coordinate and manage auction operations 
                •	Review and monitor Auction, will further improvement be needed 
                •	Take initiative for having the Auction ready on time"
                />
                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="August"
                startYear={2017}
                endMonth="August"
                endYear={2018}
                organisation="Manpower"
                jobName="Employee"
                jobDescription="•	Communication with team members
                •	Warehouse Logistic and supply chain
                •	Transport and deliver products
                •	Seek further improvement of organisation
                •	Having a good product knowledge"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="May"
                startYear={2017}
                endMonth="May"
                endYear={2018}
                organisation="Hobspot"
                jobName="App Developer Consultant"
                jobDescription="•	Working with executive team and collaborate with design and functionality of app
                •	Provide high quality and tailor app design advice and service
                •	Provide expertise regarding marketing and design
                •	Solving complicated problems
                •	Implementation of innovative app
                •	Design app and template, to create a clear and compelling vision for Hobspot"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="June"
                startYear={2017}
                endMonth="August"
                endYear={2017}
                organisation="Victoria Police"
                jobName="Consultant"
                jobDescription="Improve Victoria Police communication with international students
                - Provide relevant market research towards Victoria Police
                - Analyse current investment policy by Victoria Police and its efficacy 
                - Providing relevant recommendations for Victoria Police to further improve communications with International students
                
                - Business analyst
                - Consultant"
                />
                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="February"
                startYear={2017}
                endMonth="July"
                endYear={2017}
                organisation="RMIT University"
                jobName="Student Mentor"
                jobDescription="•	Respond to student enquiries 
                •	Working with International students 
                •	Communicate about upcoming events, ensuring appropriate message is delivered via the most appropriate medium"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="June"
                startYear={2017}
                endMonth="August"
                endYear={2017}
                organisation="Victoria Police"
                jobName="Consultant"
                jobDescription="Improve Victoria Police communication with international students
                - Provide relevant market research towards Victoria Police
                - Analyse current investment policy by Victoria Police and its efficacy 
                - Providing relevant recommendations for Victoria Police to further improve communications with International students
                
                - Business analyst
                - Consultant"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="November"
                startYear={2014}
                endMonth="August"
                endYear={2016}
                organisation="Manpower"
                jobName="Employee"
                jobDescription="•	Communication with team members
                •	Warehouse Logistic and supply chain
                •	Transport and deliver products
                •	Seek further improvement of organisation
                •	Having a good product knowledge"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="October"
                startYear={2014}
                endMonth="July"
                endYear={2015}
                organisation="ANSA"
                jobName="Event Manager"
                jobDescription="Creating event for Norwegian students, allowing them to meet other Norwegian students in Australia

                •	Collaborating with group in pursuit of portfolio goal
                •	Stakeholder engagement
                •	Creating Event calendar, to deliver communication direct to ANSA’s members"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Experience 
                startMonth="January"
                startYear={2013}
                endMonth="December"
                endYear={2013}
                organisation="La Trobe University"
                jobName="Peer Mentor"
                jobDescription="•	Give advice to students 
                •	Respond to student enquiries 
                •	Cross culture understanding, give support towards new students"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>
                
                <Experience 
                startMonth="June"
                startYear={2010}
                endMonth="July"
                endYear={2012}
                organisation="Logent Orcus As"
                jobName="Employee"
                jobDescription="Warehouse employee for Brødrene Dahl. Part time and full-time"
                />
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div>
                <Skills
                skill="Communication"
                aboutSkill="Ability to listen to clients and identify their needs and provide solutions, as demonstrated through working in client consultation at Phoenix Auction, ANSA and Manpower."
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Skills
                skill="Team player"
                aboutSkill="Adapt well within diverse, multidisciplinary teams to share knowledge and support achieving common objectives, as shown through work with ANSA, Common Purpose and University"
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Skills
                skill="Cultural understanding"
                aboutSkill="As a Foundation's Mentor I mentored international students from China."
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Skills
                skill="Leadership"
                aboutSkill="Confident leader able to organise, delegate and motivate a team to achieve common goals, as shown in my role at ANSA where I led a team to create an event for 90 individuals."
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

                <Skills
                skill="IT"
                aboutSkill="proficient with coding, IOT and MS Office (Excel, Word and Project) through extensive use in academic and work/volunteer settings."
                />

                <hr style={{borderToP: '3px solid #e22947'}}/>

              <Skills
                skill="Languages"
                aboutSkill="Multilingual communicator in English, Norwegian and Basic Chinese"
                />  
                </div>
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
                        <Tab>About Me</Tab>
                        <Tab>Education</Tab>
                        <Tab>Experience</Tab>
                        <Tab>Skills</Tab>
                        <Tab>References</Tab>
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
    
    export default AboutMe;