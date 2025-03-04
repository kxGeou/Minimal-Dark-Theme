import CodeImg from '../assets/code.png'
export default function HeroSection() {
  return (
    <header className='flex flex-col justify-center items-center text-center mt-[4rem]'>
        <div className='mb-[6rem] space-y-2'>
            <h2 className='text-[2.5rem] md:text-[3.25rem] text-[#7887FF] font-semibold'>Minimalist Dark Theme</h2>
            <p className='text-[1.25rem] text-white/40 font-light'>Minimal dark theme, perfect for late coding sessions</p>
        </div>

        <img src={CodeImg} alt="code image"  className='max-w-full rounded-xl shadow-2xl'/>
    </header>
  )
}
