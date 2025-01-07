import React, { useEffect, useState } from 'react'
import { closeFunc, courseUpdateInpHandle } from '../../redux/slices/classesSlice'
import { useDispatch, useSelector } from 'react-redux'
import Multiselect from 'multiselect-react-dropdown'
import { courseUpdate, getAccounts } from '../../actions/classesAction'

const CourseUpdateModal = () => {
    const {courseUpdateInpVal,accounts,updateClassObj,accountsUpdate}=useSelector(state=>state.classes)

    const [selectedValue,setSelectedValue]=useState(updateClassObj?.accounts?.map(data => {
        return data?.email
    }))
    const [displaySelect,setDisplaySelect]=useState([])
    const dispatch=useDispatch()
 
    console.log(selectedValue);

    useEffect(()=>{
        dispatch(getAccounts())
    },[dispatch])


    const onSelect=(e)=>{
        console.log(e);
        setSelectedValue(e)
    }
    const onRemove=(e)=>{
        console.log(e);
        
    }

    const data={
        name: courseUpdateInpVal,
        accounts: selectedValue
    }

    
    

    const saveBtn=()=>{
        dispatch(courseUpdate(updateClassObj?.id,data))
    }
    return (
        <div className='modal_container'>
            <div onClick={() => dispatch(closeFunc())} className="overlay"></div>
            <div className="modal_card">
                <button onClick={() => dispatch(closeFunc())} className='close_btn'>close</button>

                <input type="text" value={courseUpdateInpVal} onChange={(e) => dispatch(courseUpdateInpHandle(e.target.value))} />
                <Multiselect
                    isObject={false}
                    showCheckbox
                    options={accounts.map(data => {
                        return data?.email
                    })} // Options to display in the dropdown
                    selectedValues={updateClassObj?.accounts?.map(data => {
                        return data?.email
                    })}// Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    // displayValue={updateClassObj?.accounts?.map(data => {
                    //     return data?.email
                    // })} // Property name to display in the dropdown options
                />
                <button onClick={saveBtn} className='save_btn'>Save</button>
            </div>

        </div>
    )
}

export default CourseUpdateModal