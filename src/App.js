
import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';

const App=()=> {

const [tours,Settours]=useState(data);

function removeTour(id){
        const newtours=tours.filter(tour=>tour.id!=id);
        Settours(newtours)
}

if(tours.length===0){
  return (
    <div className='refresh flex h-[10%] my-[50vh] items-center justify-center flex-col text-xl '>
      <h1 className='font-bold'>No tours left</h1>
      <button className='btn-white border my-4' onClick={()=>Settours(data)}>Refresh</button>
    </div>
  );
}
  // const[count,setcount]=useState(0);
  // function dechandler(){
  //        setcount(count-1);
  // }
  // function inchandler(){
  //        setcount(count+1);
  // }
  // function resethandler(){
  //        setcount(0);
  // }
  
  return (
         <div className='App'>
          <Tours tours={tours} removeTour={removeTour}></Tours>
         </div>





  //  <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
  //   <div className='text-[#0398d4] font-medium text-2xl'>
  //     increment & decrement
  //   </div>
  //   <div className='flex flex-row  gap-12 py-3 rounded-sm text-[25px] bg-white justify-center '>
  //   <div>
  //     <button onClick={dechandler} className='border-r-2 text-center w-20 border-[#bfbfbf] text-5xl'>-</button>
  //   </div>
  //   <div className='font-bold gap-12 text-5xl justify-center'>
  //        {count}
  //   </div>
  //   <div>
  //     <button onClick={inchandler} className='border-l-2 text-center w-20 border-[#bfbfbf] text-5xl'>+</button>
  //   </div>
  //   </div> 
  //   <button  className='bg-[#0398d4] font-small text-large px-5 py-2 rounded-sm text-white' onClick={resethandler}>Reset</button>
  //  </div>



   
  );
}

export default App;
