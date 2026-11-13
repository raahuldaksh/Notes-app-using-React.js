import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [disc, setDisc] = useState('')

  const [task,setTask]= useState([])
  


const submitHandler =(e)=>{
e.preventDefault()


const copyTask = [...task];


copyTask.push({title,disc})
setTask(copyTask)


setTitle('')
setDisc('')
}
const deleteNote = (idx)=>{
  const copyTask =[...task];
  console.log(idx)
  copyTask.splice(idx,1)
  setTask(copyTask)
}

  return (
    <div className=' bg-black '>
        <div className='h-full lg:h-screen lg:flex bg-black text-white p-10  '>
          <form action=""className='   flex justify-between items-start lg:w-1/2 px-10 py-5  my-5 border-b-2    lg:border-r-2 lg:border-b-0 ' onSubmit={(e)=>{submitHandler(e)}}>
            <div className='w-full flex flex-col items-start gap-5 '>
            <span className='flex items-end gap-1 border-b '>
            <img className='h-15 '  src="https://shorturl.at/O5H48" alt="" />
            <h1 className=' text-center font-bold text-xl'>Your Notes...</h1>
            </span>
            
              <input 
              type="text" 
              placeholder='Note title'
              className=' w-full px-5 py-2 border-2 rounded mb-5'
              value ={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
              />

              <textarea
              type="text" 
              placeholder='Note details. . .'
              className='w-full px-5 py-2 mb-5 h-40 border-2 rounded'
              value ={disc}
              onChange={(e)=>{
                setDisc(e.target.value)
              }}
              />
              <button className='w-full active:bg-gray-400 bg-white text-black px-5 py-2 rounded'>Add Note</button>
            </div>
            
          </form>
          <div className='min-h-100 px-5 py-5  my-5 overflow-hidden lg:w-1/2 '>
            <h1 className=' px-5 font-bold text-xl'>Recent Notes</h1>
            <div className='h-full  scrollbar-none justify-center flex flex-wrap overflow-auto px-5 gap-5 py-5'>
              {task.map((elem,idx)=>{
                
                return <div  key={idx} className="h-60 w-40 rounded-xl bg-white overflow-hidden flex flex-col justify-center items-center">
                  <h3 className='text-black uppercase text-sm font-semibold px-3 pt-5 mb-2'>{elem.title}</h3>
                  <div className='h-36 w-full overflow-auto scrollbar-none px-4 py-1 my-1'><p className=' text-gray-500 text-xs'>{elem.disc}</p></div>
                  <button onClick={()=>{deleteNote(idx)}} className='  bg-gray-400 rounded-full my-1 px-10 py-1 text-red-500 text-xs font-semibold cursor-pointer active:scale-95'>Delete</button>
                </div>
               
              })}




              
             
            
            </div>
          </div>
        <div><h1></h1></div>
        </div>
    </div>
  )
}

export default App 
