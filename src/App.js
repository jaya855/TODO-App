import './App.css';
import 'simplebar/dist/simplebar.min.css';
import { message } from 'antd';


import { useState } from 'react';
import { BsFillXCircleFill } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";


function App() {
   const [inputData,setInputData]=useState("");
   const [toDoList,setToDoList]=useState([])

   const deleteHandler=(index)=>{
   
    setToDoList((prev)=>{
      return prev.filter((ele,ind)=>{
         return ind!==index
      })
    })
    message.error('item deleted from list');
   }
  const dataChangeHandler=(e)=>{
    setInputData(e.target.value)
  }


  const addToListHandler=()=>{
    if(toDoList.includes(inputData)){
      message.error('item already added');
    }
    else{
      setToDoList((prev)=>{
        return [...prev,inputData]
      })
      message.success('item added to list');
    }
   
    setInputData("")
  }

  console.log(toDoList);
  return (
    <div className='flex justify-center shadow-2xl shadow-cyan-500/50  bg-[#A78BFA] items-center h-screen'>
    <div className="h-[30rem] rounded-[1rem] w-[20rem] bg-[#e9d5ff] text-white">
     <div className='flex justify-center items-center h-[3rem] bg-[#86198F] mt-[2rem] mb-[1rem] text-[2rem] font-bold'>ToDo List</div>
     <div className='flex justify-center items-center'>
      <input className=' border-b-[3px] border-[#86198F]  bg-[#e9d5ff]   text-[1.5rem]  h-[3rem] w-[12rem] ml-[1.5rem] mt-[1rem] mb-[1rem] flex justify-center items-center text-center placeholder-[#86198F] text-black'
       type='text' placeholder='Add a Item'
       value={inputData}
       onChange={dataChangeHandler}
       />
        <div className='text-[#86198F] text-5xl' onClick={addToListHandler}><BsPlusCircleFill/></div>
       

     
     </div>
    
     

<div className='mt-8 h-[17rem] overflow-y-auto'>
  {
    
    toDoList.map((data, index) => (
      <div className='flex items-center mb-7 ml-12 pl-4 pr-4 space-x-4' key={index}>
        <div className='text-[#86198F] text-2xl flex items-center' onClick={() => deleteHandler(index)}>
          <BsFillXCircleFill />
        </div>
        <div className='text-[#86198F] font-bold text-2xl'>{data}</div>
      </div>
    ))
  }
</div>






     
    </div>
    </div>
  );
}

export default App;
