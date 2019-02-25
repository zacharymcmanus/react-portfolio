import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.imgur.com/I6MWiJq.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr />
              <p>HTML/CSS | React | Python | NodeJS | Express | Java</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/zacharymcmanus/" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href="https://github.com/zacharymcmanus" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-github" aria-hidden="true"></i>
                </a>
                <a href="https://www.facebook.com/zacharyamadomcmanus" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="https://codepen.io/zacharymcmanus/" rel="noopener noreferrer" target="_blank">
                    <i class="fab fa-codepen" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
