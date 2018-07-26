import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
// import logo from '../images/logo-designcode.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30" /></Link>
        <a href="https://designcode.io/">Courses</a>
        <Link to="/">Downloads</Link>
        <Link to="/">Workshops</Link>
        <a href="https://designcode.io/"><button>Design+Code</button></a>
      </div>
    </div>
    )
  }
}

export default Header