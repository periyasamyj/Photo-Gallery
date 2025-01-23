import Nav from './components/Nav.tsx'
import Body from './components/Body.tsx'

export default function App() {
  return (
    
    <div className='w-screen h-screen'>
      <div className='w-screen h-[12%]'><Nav/></div>
      <div className="w-screen h-[88%] flex justify-center items-center"><Body/></div>
    </div>
  );
}