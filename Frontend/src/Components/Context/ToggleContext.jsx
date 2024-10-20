import React, { createContext } from 'react'

const ShowContext = createContext();

const ToggleContext = () => {
    const [showTop, setShowtop] = useState(true)

    const showView = ()=>{
      setShowtop(false)
    }

  return (
    <div>
      
    </div>
  )
}

export default ToggleContext
