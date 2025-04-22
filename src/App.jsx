import './App.css'
import BottomContainer from './components/BottomContainer'
import TopContainer from './components/TopContainer'

function App() {

  return (
    <div className='bg-[#FFF3D5] text-black w-full min-h-screen py-6 px-3 md:px-18'>
      <TopContainer />
      <BottomContainer />
    </div>
  )
}

export default App
