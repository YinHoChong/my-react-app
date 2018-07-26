import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';
import Section from '../components/Section';
import Wave from '../components/Wave';
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell';
import styled from 'styled-components'

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
  padding: 0 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

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
    
    <SectionCaption>12 sections - 6 jours </SectionCaption>
    <SectionCellGroup>
      {staticdata.cells.map(cell => (
        <Cell
          title={cell.title}
          image={cell.image}/>
      ))}
    </SectionCellGroup>
  </div>
)

export default IndexPage
