import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../redux/slices/homeworkSlice'
import { closeFunc, courseCreateInpHandle } from '../../redux/slices/classesSlice'
import Multiselect from 'multiselect-react-dropdown';
import { courseCreate, getAccounts } from '../../actions/classesAction';

const CourseCreateModal = () => {
    const dispatch = useDispatch()
    const { courseCreateInpVal,accounts } = useSelector(state => state.classes)
    const [selectedValue,setSelectedValue]=useState([])
    const [options,setOptions]=useState([])



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
        name: courseCreateInpVal,
        accounts: selectedValue
    }

    const saveBtn=()=>{
        dispatch(courseCreate(data))
    }
    return (
        <div className='modal_container'>
            <div onClick={() => dispatch(closeFunc())} className="overlay"></div>
            <div className="modal_card">
                <button onClick={() => dispatch(closeFunc())} className='close_btn'>close</button>

                <input type="text" value={courseCreateInpVal} onChange={(e) => dispatch(courseCreateInpHandle(e.target.value))} />
                <Multiselect
                    isObject={false}
                    showCheckbox
                    options={accounts.map(data=>{
                        return data?.email
                    })} // Options to display in the dropdown
                    selectedValues={selectedValue} // Preselected value to persist in dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                />
                <button onClick={saveBtn} className='save_btn'>Save</button>
            </div>

        </div>
    )
}

export default CourseCreateModal