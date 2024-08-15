import React from 'react'

const Card = (props) => {
    return (<>
        <div className=' px-10 py-5 border rounded-md text-center flex-grow' style={{backgroundColor:props.bgColor}}>
            <p className='text-2xl medium'>{props.title}</p>
            <p>{props.subTitle}</p>



          </div>
    </>

    )
}

export default Card