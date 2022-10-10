import React from 'react';
import { useState } from 'react';
import './todo.css';

export default function TodoList() {
    const [activity, setActivity] = useState();
    const [listData, setlistData] = useState([]);
    const [error, setError] = useState(false)

    const addActivity = () =>{
        (activity.length == 0) ?
            setError(true)
            :      
        setlistData((listData) =>{
            const updatedlist = [...listData, activity];
            // console.log(updatedlist)
            setActivity('');
            return updatedlist;
        })
    }
    const removeList = (index) =>{
     const updatedlistData = listData.filter((element, id) =>{
        return index != id;
     })
     setlistData(updatedlistData);

    }
    function removeAll(){
        setlistData([]);
    }
  return (
    <>
    
    <div className="container">
      <div className="header">TODO LIST</div>
      <input type="text" placeholder='Enter value' value={activity} onChange={(e) => 
        setActivity(e.target.value)} />
      <button className='button-add' onClick={addActivity}>Add</button>
     { error && activity.length==0 ?
      <label htmlFor="" className="errormsg">This field is required</label>
     : ''
     }     
      {
            listData.length >= 1 ? <div className="list-heading">Your Activity ☺
            </div>
            :<div className="list-heading">No data available! ☹</div>
        }
    
      <div className="result">
      {
        listData!=[] &&  listData.map((data, index) =>{
            return(
                <>
                <p key={index} style={{display:"flex"}}>
                    <div className="listData">{data}</div>
                    <div className="remove-list" onClick={() =>removeList(index)}>X</div>
                </p>
                </>
            )

        })}
        
         
      </div>
      {
          listData.length >= 3 &&  
        <button className='removeAll' onClick={removeAll}>Remove All</button>

        }
     
     </div>
    </>
  )
}
