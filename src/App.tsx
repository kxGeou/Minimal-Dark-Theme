import './App.css'
import Colors from './components/Colors'
import Download from './components/Download'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <main className='bg-[#1f2234] min-h-screen flex flex-col justify-start items-center py-8 px-6 gap-[8rem]'>
      <HeroSection></HeroSection>
      <Download></Download>
      <Colors></Colors>
    </main>
  )
}

export default App
