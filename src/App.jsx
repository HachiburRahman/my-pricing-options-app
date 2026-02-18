
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import Navbar from './Components/Navbar/Navbar'
import PricingOptions from './Components/PricingOptions/PricingOptions'

const pricingPromise=fetch("/Pricing.json").then(res=>res.json())

function App() {
 

  return (
    <>
      
      <header>
        <Navbar></Navbar>
        {/* <DaisyNav></DaisyNav> */}
      </header>
      <main>
        <Suspense fallback={<div className='text-center'><span className="loading loading-spinner loading-lg "></span></div>}>
          <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
      </main>
     
    </>
  )
}

export default App
