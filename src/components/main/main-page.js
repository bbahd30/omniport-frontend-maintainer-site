import React, { Component } from 'react'

import MainSection from './sections/header/main-section'
import ProjectSection from './sections/project/project-section'
// import BlogSection from './sections/blog/blog-section'
import BlogSection from './sections/blog/blog-section2'
// import InfoSection from './sections/info/info-section'
import InfoSection from './sections/info/info-section2'

class MainPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { apiInfoData } = this.props
    const {
      contactData,
      footerData,
      locationData,
      projectData,
      socialData,
    } = apiInfoData
    return (
      <div>
        <MainSection />
        <ProjectSection project={projectData.results.slice(0, 4)} />
        <BlogSection />
        <InfoSection
          location={locationData}
          contact={contactData}
          social={socialData}
          about={footerData}
        />
      </div>
    )
  }
}

export default MainPage
