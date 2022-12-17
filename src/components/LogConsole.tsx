import React from "react"

interface Prop {
  logMessages: string[];
  setMessages:React.Dispatch<React.SetStateAction<string[]>>
}

const LogConsole: React.FC<Prop> = ({logMessages, setMessages}) => {
  return (
    <div id="msgList">
      <span className="msg">test</span>
      {
        logMessages.map(
          (val, index) => (
            <div className="msg">{val}</div>
          )
        )
      }
    </div>
  )
}

export default LogConsole