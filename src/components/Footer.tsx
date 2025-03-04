import ThemeIcon from '../assets/theme-icon.png';
export default function Footer() {
  return (
    <footer className='flex flex-col justify-center items-center gap-12'>
        <img src={ThemeIcon} alt="icon of theme" className='w-24'/>
        <div className='rounded text-white/60 bg-[#393E5B] px-6 py-4'>
            Made by kxGeou
        </div>
    </footer>
  )
}
