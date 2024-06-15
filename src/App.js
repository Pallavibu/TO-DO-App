import './App.css';
import Counter from './Components/Counter';
import Todoapp from './Components/Todoapp';

function App() {
  return (
    <div className=" bg-lime-100 min-h-screen">
    <h1 className='font-bold text-3xl flex justify-center py-5 px-2'>Small Projects on Reactjs</h1>
    <Counter/>
    <Todoapp/>
    </div>
    
  );
}

export default App;
