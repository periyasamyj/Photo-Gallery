import Nav from './components/Nav.tsx'
import Body from './components/Body.tsx'
import Home from './components/Home.tsx';
// import { BrowserRouter as Route,Router,Routes } from 'react-router-dom';
export default function App() {
  return (
    
    <div className='w-screen h-screen'>
      <div className='w-screen h-[12%]'><Nav/></div>
      <div className="w-screen h-[88%] flex justify-center items-center"><Home/></div>
    </div>
  );
}