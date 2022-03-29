import Head from 'next/head'
import Image from 'next/image'
import Stepper from '../components/Stepper'
import StepperControl from '../components/StepperControl'
import Account from '../components/steps/Account'
import Details from '../components/steps/Details'
import Final from '../components/steps/Final'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { StepperContext } from '../providers/userRegister'

export default function Home() {

  const [currentStep, setCurrentStep] = useState(1)
  const [userData, setUserData] = useState('')
  const [finalData, setFinalData] = useState([])
  const steps = [
    "Account Information",
    "Personal Details",
    "Complete"
  ]

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />
      case 2:
        return <Details />
      case 3:
        return <Final />
    }
  }

  const handleClick = (direction) => {
    let newStep = currentStep
    direction == "next" ? newStep++ : newStep--
    console.log("CURRENT STEP")
    console.log(newStep)
    console.log(steps.length)
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">

        {/* Stepper */}
        <div className="container horizontal mt-5">
          <Stepper
            steps={steps}
            currentStep={currentStep}
          />
          {/* Display Components */}
        </div>

        {/* Navigation controls */}
        <div className="my-10 p-10">
          <StepperContext.Provider value={{
            userData,
            setUserData,
            finalData,
            setFinalData
          }}>
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
        {currentStep != steps.length &&
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        }
      </main>
    </div>
  )
}
