import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import githubLogo from '../assets/github-mark-white.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <section id="home">
      <div className="container mx-auto flex px-10 py-12 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-3/4 flex flex-col mb-16 md:mb-0 items-center text-center">
          <p className="sm:text-lg text-3xl">
            Hello, I'm
          </p>
          <h1 className="title-font sm:text-4xl text-3xl mb-1 font-medium text-white">
            Shawn Ericksen
          </h1>
          <h2 className="sm:text-lg text-3xl mb-5" >
            <code>A WEB DEVELOPER</code>
          </h2>
          <div className="md:w-1/2 m-12">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
              Under Construction
            </h1>
            <p>
              This is the start of my personal website. I'm going to be expanding on it and adding new content over time.
            </p>
          </div>
          <div className="inline-flex mb-3">
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-12 font-medium text-white">
            Built with Vite + React
          </h1>
          {/* <div className="card">
            <button className="mb-2" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p> */}
          <h1 className="title-font sm:text-2xl text-3xl font-medium">
            Check me out on:
          </h1>
          <div className="inline-flex">
            <a href="https://github.com/shawnericksen" target="_blank">
              <img src={githubLogo} className="logo" alt="Github logo" />
            </a>
            <a href="https://www.linkedin.com/in/shawnericksen/" target="_blank">
              <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
