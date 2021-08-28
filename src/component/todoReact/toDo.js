import React,{useState,useEffect} from 'react'
import "./style.css"

const getLocalData = ()=>{
    const lists = localStorage.getItem("mytoDoList")
    if(lists)
        return JSON.parse(lists)
    else
    {
        return []
    }
}

const ToDo = () => {
    const [myInputdata,setmyInputData] = useState("")
    const [items,setItems] = useState(getLocalData())
    const [isEditItem,setisEditItem] = useState("")
    const [toggleButton,settoggleButton] = useState(false)


    const addItem = ()=>{
        if(!myInputdata)
        {
            alert("please give the ToDo")
        }
        else if(myInputdata && toggleButton)
        {
            setItems(items.map((curr)=>{
                if(curr.id===isEditItem)
                {
                    return({...curr,name: myInputdata})
                }
                return curr
            }))


            setmyInputData("")
            setisEditItem("")
            settoggleButton(false)
        }
        else{
            const newInputData = {
                id : new Date().getTime().toString(),
                name : myInputdata
            } 
            
            setItems([...items,newInputData])
            setmyInputData("")
        }

    }

const deleteItem = (id)=>{
    const leftItem = items.filter((curritem)=>{ return curritem.id!==id})

    setItems(leftItem)
}

const deleteAllItems = (id)=>{
    
    setItems([])
    setmyInputData("")
}
const editItem = (id)=>{
    let EditItem = items.find((curritem)=>{ return curritem.id===id})

    setmyInputData(EditItem.name)
    setisEditItem(id)
    settoggleButton(true)
       
}

useEffect(()=>{
 localStorage.setItem("mytoDoList",JSON.stringify(items))
},[items])

    return (
        <div>  
            <div className="main-div">
            <div className="child-div">
            <figure>
            <img src="./images/todo.svg" alt="images"></img>
            <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder="Add inputs" className="form-control" value={myInputdata} onChange={(event)=>setmyInputData(event.target.value)}></input>
                {toggleButton ? (<i className="fa fa-edit add-btn" onClick={addItem}></i>) : ( <i className="fa fa-plus add-btn" onClick={addItem}></i> )}
            </div>

            <div className="showItems">
                    {items.map((curr)=>{
                        return (
                            <div className="eachItem" key={curr.id}>
                            <h3>{curr.name}</h3>
                
                            <div className="todo-btn">
                            <i className="far fa-edit add-btn" onClick={()=>editItem(curr.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curr.id)}></i>
                            </div>
                            
                            </div>
                        )
                    })}

            
            </div>

            <div className="showItems"><button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>deleteAllItems()} ><span>CheckList</span></button></div>
            
            </div>
            </div>
        
        </div>
    )
}

export default ToDo
