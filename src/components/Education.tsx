import "./Education.css"

interface education_info_t {
  institute:string;
  institute_link:string;
  location:string;
  degree:string;
};

const Education:React.FC<{edu_list:education_info_t[]}> = ({edu_list}) => {
  return (
    <div id='education_bg' style={{width:"100%", fontSize:"x-large", marginTop:"20px", textAlign:"left", paddingLeft:"25px"}}>
      <div style={{width:"100%"}}>Education:</div>
      {
        edu_list.map(
          (info, index) => (
            <div
              key={index}
              className="edu_box"
              >
              <div className="institute_title">
                <a href={info.institute_link}>{info.institute}</a> 
              </div>
              <div className="institute_location">{info.location}</div>
              <div className="edu_degree">{info.degree}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default Education