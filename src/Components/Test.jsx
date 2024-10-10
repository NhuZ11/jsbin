import React,{useState, useEffect} from 'react'

const Test = () => {
    const[panelWidth,setPanelWidth] = useState(window.innerWidth)

    const handleResize = ()=>{
        setPanelWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize)
    },[])

    const[activePanel, setactivePanel] = useState(1)

  return (
    <div>
      {panelWidth}
      <button>add panel</button>
      <div className="container-fluid bg-dark" style={{width: panelWidth/2}}>
         <p>hello</p>
      </div>
      <div className="container-fluid bg-success" style={{width: panelWidth}}>
         <p>hello</p>
      </div>
      <div className="row">
        <div className="col bg-primary" style={{width: panelWidth/2}}>{panelWidth}</div>
        <div className="col bg-success" style={{width: panelWidth/2}}>{panelWidth}</div>
      </div>
    </div>
  )
}

export default Test
