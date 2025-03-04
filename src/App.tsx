import './App.css'
import Colors from './components/Colors'
import Download from './components/Download'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {

  return (
    <main className='bg-gradient-to-b from-slate-800 to-slate-900 min-h-screen flex flex-col justify-start items-center py-8 px-6 gap-[8rem] md:gap-[14rem]'>
      <HeroSection></HeroSection>  
      <Download></Download>
      <Colors></Colors>
      <Footer></Footer>
    </main>
  )
}

export default App
