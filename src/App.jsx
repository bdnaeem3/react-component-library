import Image from './assets/section/top-bar/TopBarOne.png'
import Anchor from './components/anchor'
import ImageCard from './components/card/image-card'
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className='flex'>
      <Sidebar ui="one">
        <div className={`py-[30px] px-[10px] flex items-center justify-center border-b border-[#ddd]`}>
          <img src="/public/react.svg" alt="" />
        </div>
        <Anchor>One</Anchor>
        <Anchor>Two</Anchor>
        <Anchor>Three</Anchor>
      </Sidebar>

      <div className='p-[30px]'>
        <h1 className='mb-[30px]'>All components</h1>
        <div className='flex flex-wrap justify-center gap-[30px]'>
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
          <ImageCard ui="one" image={Image} />
        </div>
      </div>
    </div>
  )
}

export default App
