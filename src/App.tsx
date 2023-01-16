import React from 'react';
import './App.css';

// Data 
import my_profile from './assets/profile.json'

// Components
import Header from './components/Header';
// import Award from './components/Awards';
import Education from './components/Education';
import Experience from './components/Experience';

const App:React.FC = () => {

  const BriefIntro:React.FC = () => {
    return (
      <div id='breif_intro' style={{fontSize:"large", marginTop:"10px", marginBottom:"10px", width:"100%"}}>
        <span style={{marginLeft:"10px", marginRight:"10px"}}>
          This is my personal page, but I don't know what should I put here yet. 
        </span>
      </div>
    )
  }

  const OngoingProjects = () => {
    return (
      <div id='ongoing_projects' style={{width:"100%", fontSize:"x-large", marginTop:"20px", textAlign:"left", paddingLeft:"25px"}}>
        <div style={{width:"100%"}}>On-going toy projects:</div>
        <li><a href='https://ramzpat.github.io/pkm-sandwich-finder/'>Pokemon SV sandwich finder</a></li>
      </div>
    )
  }

  const Footer:React.FC = () => {
    return (
      <div id='footer'>
        <div style={{width:"100%", fontSize:"medium"}}>
          <a href='https://github.com/ramzpat/pwa-profile'>source code</a>
           | Last update: 2023-01-16
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <div className="App-header">
        <Header profile={my_profile} />
        <hr style={{marginLeft:"10px", marginRight:"10px", width:"95%"}} />
        <BriefIntro />
        <hr style={{marginLeft:"10px", marginRight:"10px", width:"95%"}} />
        <OngoingProjects />
        <Experience exp_list={my_profile.experiences} />
        {/* <Award award_list={my_profile.awards} /> */}
        <Education edu_list={my_profile.education}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
