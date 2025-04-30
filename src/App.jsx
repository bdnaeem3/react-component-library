import Image from './assets/section/top-bar/TopBarOne.png'

const menuClass = 'p-[15px] border-b border-[#ddd]'
const imageWapperClass = 'group w-[300px] h-[300px] flex items-center justify-center border border-[#ddd] overflow-hidden rounded-[4px]'
const imageClass = 'group-hover:scale-110 transition duration-300'

function App() {
  return (
    <div className='flex'>
      <div className="flex flex-col w-[300px] border-r border-[#ddd] h-screen shrink-0">
        <div className="py-[30px] px-[10px] flex items-center justify-center border-b border-[#ddd]">
          <img src="/public/react.svg" alt="" />
        </div>

        <a href="#" className={menuClass}>One</a>
        <a href="#" className={menuClass}>Two</a>
        <a href="#" className={menuClass}>Three</a>
        <a href="#" className={menuClass}>Four</a>
        <a href="#" className={menuClass}>Five</a>
        <a href="#" className={menuClass}>Six</a>
        <a href="#" className={menuClass}>Seven</a>
        <a href="#" className={menuClass}>Eight</a>
        <a href="#" className={menuClass}>Nine</a>
        <a href="#" className={menuClass}>Ten</a>
      </div>

      <div className='flex flex-wrap justify-center gap-[30px] p-[30px]'>
        <a href="#" className={imageWapperClass}>
          <img src={Image} alt="" className={imageClass} />
        </a>

        <a href="#" className={imageWapperClass}>
          <img src={Image} alt="" className={imageClass} />
        </a>
      </div>
    </div>
  )
}

export default App
