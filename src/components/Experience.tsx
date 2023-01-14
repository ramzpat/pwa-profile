import "./Experience.css"

interface exp_info_t {
  company:string;
  company_link:string;
  location:string;
  position:string;
  period:string;
};

const Experience:React.FC<{exp_list:exp_info_t[]}> = ({exp_list}) => {
  return (
    <div id='exp_bg' style={{width:"100%", fontSize:"x-large", marginTop:"20px", textAlign:"left", paddingLeft:"25px"}}>
      <div style={{width:"100%"}}>Education:</div>
      {
        exp_list.map(
          (info, index) => (
            <div
              key={index}
              className="exp_box"
              >
              <div className="company_title">
                <a href={info.company_link}>{info.company}, {info.location}</a> 
              </div>
              <div className="company_period">{info.period}</div>
              <div className="company_position">{info.position}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default Experience