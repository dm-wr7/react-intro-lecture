import './App.css'
import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import Directory from './components/Directory'

function App() {
  return (
    <div className="App">
      <h1>Hello and welcome to REACT</h1>
      <p>My name is Andrew and I like to party</p>
      <Directory />
      <ClassComponent />
      <ClassComponent />
      <ClassComponent />
      <FunctionalComponent />
      <FunctionalComponent />
    </div>
  )
}

export default App
