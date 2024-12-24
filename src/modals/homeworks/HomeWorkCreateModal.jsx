import React, { useEffect } from 'react'
import "../css/modal.css"
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, hwCreateInpHandle, hwCreateSelectHandle } from '../../redux/slices/homeworkSlice'
import { getGroups, getMyGroups, homeWorkCreateSave } from '../../actions/homeworkAction'

const HomeWorkCreateModal = () => {
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getGroups())
        dispatch(getMyGroups())
    },[dispatch])

    const {myGroups,hwCreateInpVal,hwCreateSelectVal}=useSelector(state=>state.homework)

    const obj={
        group: hwCreateSelectVal,
        name: hwCreateInpVal
    }



    const saveBtn=()=>{
        console.log(obj);
        
        dispatch(homeWorkCreateSave(obj))
    }

  
    
  return (
    <div className='modal_container'>
        <div onClick={()=>dispatch(closeModal())} className="overlay"></div>
        <div className="modal_card">
            <button onClick={()=>dispatch(closeModal())} className='close_btn'>close</button>
            <select value={hwCreateSelectVal} onChange={(e) => dispatch(hwCreateSelectHandle(e.target.value))}>
                    <option value="" disabled>Select a group</option>
                    {
                        myGroups?.map((data, i) => {
                            return <option value={data?.name} key={i}>{data?.name}</option>
                        })
                    }
                </select>
            <input type="text" value={hwCreateInpVal} onChange={(e)=>dispatch(hwCreateInpHandle(e.target.value))}/>
            <button className='save_btn'onClick={saveBtn}>Save</button>
        </div>

    </div>
  )
}

export default HomeWorkCreateModal