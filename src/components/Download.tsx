import vs from '../assets/vscode.png'
export default function Download() {
  return (
    <section className="w-full h-[7rem] bg-[#393E5B] flex flex-col justify-center items-center gap-3 py-6 rounded">
      <img src={vs} className='max-w-[3rem]'></img>
      <p className='text-white'>VS Code</p>
    </section>
  )
}
