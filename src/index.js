import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";

import NavBar from "./components/navbar";
import SocialsRow from "./components/socials";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<NavBar />
		<div className="section-flex">
			<span className="text-primary header">
				<i>We are</i>
			</span>
			<span className="text-secondary header bounded-text-100x align-center">
				RUTGERS UNIVERSITY MOBILE APP DEVELOPMENT.
			</span>
			<p className="text-primary bounded-text-75x align-center subtext">
				RUMAD IS A STUDENT-LED TECH CLUB DEDICATED TO EDUCATING THE
				RUTGERS COMMUNITY ON HOW TO MAKE THEIR INNOVATIVE IDEAS TO LIFE
				WITH MOBILE APP DEVELOPMENT.
			</p>
			<div className="vertical-pad" />
			<a
				className="href-btn raise subtext text-primary"
				href="https://google.com"
			>
				SPRING 2023 GENERAL INTEREST FORM
			</a>
			<SocialsRow />
		</div>
		<div className="vertical-pad-2x" />
		<div className="section-flex flex-row" style={{width:"90%"}}>
			<div className="flex-col" id="about">
				<div className="flex-col">
					<span className="text-primary header">ABOUT</span>
					<span className="text-tertiary header">
						CREATIVITY. <br />
						COMMUNITY. <br />
						COMPASSION.
					</span>
				</div>
				<div className="vertical-pad" />
				<p className="text-primary section-text">
					MOBILE APPS ARE AN INTERSECTION BETWEEN THE INDUSTRY AND THE
					CLASSROOM, AND OUR CURRICULUM WAS DESIGNED WITH THAT BELIEF
					IN MIND.
					<br />
					<br />
					WE MOTIVATE STUDENTS TO TAKE ACTIONABLE STEPS TOWARDS THEIR
					CAREER GOALS THROUGH TALKS, COMPETITIONS, AND NETWORKING
					EVENTS THAT ARE CREATED AND REINVENTED TO PREPARE STUDENTS
					FOR AN EVER-CHANGING WORLD.
				</p>
			</div>
			<div className="flex-col align-center" style={{width:"100%"}}>
				<div className="vertical-pad " />
				<div className="icon-wrapper raise align-center pad square">
					<img
						src="./about_ico.png"
						alt="Mobile devices with icons"
						style={{ width: "100%" }}
					/>
				</div>
			</div>
		</div>
		<div className="vertical-pad-2x" />
		<div className="section-flex flex-row">
			<div class="flex-col" id="accelerator">
				<span className="text-primary header">ACCELERATOR</span>
				<br />
				<span className="text-tertiary header">
					ANDROID. <br />
					IOS. <br />
					BACKEND.
				</span>
			</div>
			<p className="subtext text-primary">
				OUR 9-WEEK PROGRAM WHERE STUDENTS GO FROM BASIC PROGRAMMING
				SKILLS TO A LEVEL WHERE THEY CAN CREATE THEIR OWN MOBILE APPS.
			</p>
			<div className="flex-col align-center" style={{ width: "80vw" }}>
				<div className="lower align-center flex-col pad accelerator-wrapper">
					<span className="subtext text-primary">OUR TRACKS</span>
					<div className="align-center flex-row icon-row row-wrap">
						<div className="caption-group flex-col align-center raise">
							<img src="./android_icon.png" />
							<div className="subtext text-primary">ANDROID</div>
						</div>
						<div className="caption-group flex-col align-center raise">
							<img src="./apple_icon.png" />
							<div className="subtext text-primary">IOS</div>
						</div>
						<div className="caption-group flex-col align-center raise">
							<img src="./backend_icon.png" />
							<div className="subtext text-primary">BACKEND</div>
						</div>
					</div>
				</div>
			</div>
			<p className="subtext text-primary">
				THE ACCELERATOR IS A COMMUNITY ORIENTED PROGRAM WHERE OUR
				MENTEES HAVE ACCESS TO EXPERIENCED MENTORS AND PEERS WHO JOIN
				TOGETHER TO LEARN TOGETHER.
			</p>
		</div>
		<div className="vertical-pad-2x" />
		<div className="section-flex flex-row">
			<div class="flex-col" id="incubator">
				<span className="text-primary header">INCUBATOR</span>
				<br />
				<span className="text-tertiary header">
					COMMUNITY. <br />
					STRUCTURE. <br />
					SUPPORT.
				</span>
			</div>
			<p className="subtext text-primary">
				THE RUMAD INCUBATOR PROGRAM IS PERFECT FOR ANYONE WHO IS LOOKING
				TO APPLY THEIR IOS, ANDROID, OR BACKEND DEVELOPMENT SKILLS TO
				DEVELOP AN APP IN A STRUCTURED MANNER.
			</p>
			<div className="align-center">
				<div className="flex-row resize-row" style={{ width: "80vw" }}>
					<div className="flex-row resize-inner align-center">
						<div className="incubator-group raise align-center">
							{/* <img src="./android_icon.png" /> */}
							<div className="subtext text-primary">
								REGULAR WORKSHOPS RANGING FROM TEAM MANAGEMENT TO
								DESIGN
							</div>
						</div>
						<div className="incubator-group raise align-center">
							{/* <img src="./android_icon.png" /> */}
							<div className="subtext text-primary">
								AN ASSIGNED EXPERIENCED MENTOR TO GUIDE WITH PROJECT
								MANAGEMENT AND TECH
							</div>
						</div>
					</div>
					<div className="flex-row resize-inner align-center">
						<div className="incubator-group raise align-center">
							{/* <img src="./android_icon.png" /> */}
							<div className="subtext text-primary">
								FREQUENT TEAM FAIRS WHERE ALL TEAMS MEET TO DISCUSS
								THEIR PROGRESS
							</div>
						</div>
						<div className="incubator-group raise align-center">
							{/* <img src="./android_icon.png" /> */}
							<div className="subtext text-primary">
								A NETWORK OF STUDENTS TO OFFER HELP ALONG THE WAY
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="vertical-pad-2x" />
		<div className="section-flex flex-row">
			<div class="flex-col" id="contact">
				<span className="text-primary header">CONTACT</span>
			</div>
			
		</div>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
