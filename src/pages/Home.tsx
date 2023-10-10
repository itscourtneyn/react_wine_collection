import Background from '../assets/images/Rose_wine.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover'
      >
        <div className='flex place-items-center h-screen'>
        </div>
    </div>
  )
}

export default Home