import { Link } from 'react-router-dom'
import vs from '../assets/vscode.png'
export default function Download() {
  return (
    <section className="transition-all duration-300 w-full h-[7rem] max-w-[800px] bg-[#393E5B] hover:bg-[#323650] hover:shadow-2xl flex justify-center items-center gap-3 py-6 rounded">
      <a href="https://marketplace.visualstudio.com/items?itemName=kxGeou.minimalist-dark-theme" target='_blank' className='w-full flex flex-col justify-center items-center'>
        <img src={vs} className='max-w-[3rem]'></img>
        <p className='text-white'>VS Code</p>
      </a>
    </section>
  )
}
