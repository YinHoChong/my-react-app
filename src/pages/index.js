import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <Link to="/page-2/">Watch Teaser Video</Link>
        <h1>Thank you Aroa 😗<br/>React, meet design.</h1>
        <p>This fall we’re launching Framer X, a game-changing new product that seamlessly blends design and development. Join our waitlist to get early access.</p>
        <div className="Logos">
          <img src={require("../images/logo-sketch.png")} width="50"/>
          <img src={require("../images/logo-figma.png")} width="50"/>
          <img src={require("../images/logo-studio.png")} width="50"/>
          <img src={require("../images/logo-framer.png")} width="50"/>
          <img src={require("../images/logo-react.png")} width="50"/>
          <img src={require("../images/logo-swift.png")} width="50"/>
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses, more coming</h2>
      <div className="CardGroup">
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper4.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper2.jpg')} />
        <Card
          title="React for Designers"
          text="12 sections"
          image={require('../images/wallpaper3.jpg')} />
      </div>
    </div>
    <Section 
      image={require('../images/wallpaper2.jpg')}
      logo={require('../images/logo-react.png')}
      title="React for Designers"
      text="Learn how yo build a modern site using ract and the most efficient libraries to get your site/product online. Get familiar with components, Grid CSS, animations, interactions, dynamic data with Contenful and deploying your site with Netlify."
    />
  </div>
)

export default IndexPage
