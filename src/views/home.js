import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Project-2</title>
        <meta property="og:title" content="Project-2" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">CODINBUILDER</span>
        <input
          type="text"
          placeholder="search"
          className="home-textinput input"
        />
      </div>
      <div className="home-container2">
        <span className="home-text1">Home</span>
        <span className="home-text2">&gt;</span>
      </div>
      <div className="home-container3">
        <div className="home-container4">
          <span className="home-text3">Create</span>
        </div>
        <button className="home-button button">Folder</button>
        <a href="https://example.com" target="_blank" rel="noreferrer noopener">
          Link
        </a>
        <button className="home-button1 button">Pipeline</button>
      </div>
      <div className="home-container5">
        <div className="home-container6">
          <span className="home-text4">Status</span>
          <span className="home-text5">Name</span>
          <span className="home-text6">Last Success</span>
          <span className="home-text7">Last Failure</span>
          <span className="home-text8">Last Duration</span>
        </div>
        <img
          alt="image"
          src="/playground_assets/cb-500h.jpg"
          loading="eager"
          className="home-image"
        />
      </div>
    </div>
  )
}

export default Home
