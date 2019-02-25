import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from './Experience';
import Skills from './Skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://i.imgur.com/33rW4jy.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Zachary McManus</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Pretium viverra suspendisse potenti nullam ac tortor vitae purus
              faucibus ornare suspendisse sed nisi lacus sed viverra tellus in
              hac habitasse platea dictumst vestibulum rhoncus est pellentesque
              elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
              at augue eget arcu dictum varius duis at consectetur lorem donec
              massa sapien faucibus et
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Located</h5>
            <p>Santa Clara, CA</p>
            <h5>Phone</h5>
            <p>(209)224-1249</p>
            <h5>Email</h5>
            <p>zacharymcmanus@gmail.com</p>
            <h5>Web</h5>
            <p>mywebiste.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2013}
              schoolName="Las Positas College"
              schoolDescription="Quamvis enim depravatae non sint, pravae tamen esse possunt. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur."
            />
            <Education
              startYear={2013}
              endYear={2015}
              schoolName="California State University, Sacramento"
              schoolDescription="Quamvis enim depravatae non sint, pravae tamen esse possunt. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur."
            />
            <hr style={{borderTop: '3px solid #e22947'}}/>
            <Experience 
              startYear={2013}
              endYear={2015}
              jobName="Physical Therapy Aide"
              jobDescription="Quamvis enim depravatae non sint, pravae tamen esse possunt. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur."
            />
            <Experience 
              startYear={2010}
              endYear={2012}
              jobName="Medical Volunteer"
              jobDescription="Quamvis enim depravatae non sint, pravae tamen esse possunt. Quaesita enim virtus est, non quae relinqueret naturam, sed quae tueretur."
            />
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <Skills 
              skill="Javscript"
              progress={100}
            />
            <Skills 
              skill="React"
              progress={60}
            />
            <Skills 
              skill="Java"
              progress={60}
            />
            <Skills 
              skill="Python"
              progress={70}
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
