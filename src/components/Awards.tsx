import "./Awards.css"

interface award_info_t {
  title:string;
  time:string;
  desc:string;
};

const Award:React.FC<{award_list:award_info_t[]}> = ({award_list}) => {
  return (
    <div id='award_bg' style={{width:"100%", fontSize:"x-large", marginTop:"20px", textAlign:"left", paddingLeft:"25px"}}>
      <div style={{width:"100%"}}>Awards:</div>
      {
        award_list.map(
          (info, index) => (
            <div
              key={index}
              className="award_box"
              >
              <div className="award_title">
                {info.title} 
              </div>
              <div className="award_time">{info.time}</div>
              <div className="award_desc">{info.desc}</div>
            </div>
          )
        )
      }
    </div>
  )
}

export default Award