import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BlurryLoadingImage from './BlurryLoadingImage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BlurryLoadingImage preview="2636601-medium.jpg" image="2636601.jpg" />
    </>
  )
}

export default App
