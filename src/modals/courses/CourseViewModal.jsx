import React from 'react'
import { closeFunc } from '../../redux/slices/classesSlice'
import { useDispatch, useSelector } from 'react-redux'

const CourseViewModal = () => {
    const dispatch=useDispatch()
    const {viewClassObj}=useSelector(state=>state.classes)
    console.log(viewClassObj);
    
    return (
        <div className='modal_container'>
            <div onClick={() => dispatch(closeFunc())} className="overlay"></div>
            <div className="modal_card">
                <button onClick={() => dispatch(closeFunc())} className='close_btn'>close</button>
                <div>
                    {
                        viewClassObj?.units?.map((data,i)=>{
                            return (
                                <div key={i}>
                                    <p>{data?.name}</p>
                                    <div>
                                        <button>update</button>
                                        <button>delete</button>
                                        <button>view</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <button>unit create</button>
            </div>
        </div>
    )
}

export default CourseViewModal