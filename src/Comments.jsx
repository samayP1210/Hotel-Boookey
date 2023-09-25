import React from 'react'

export default function Comments({comments}){
    // console.log(comments)
    return(
        <>
        {
            comments.length === 0 && <h3 className='px-4 p-2'>No Comments</h3>
        }
        {
            comments.length!==0 &&
            <div>
            <h4 className='p-2'>Comments</h4>
            <ul className="list-group list-group-flush">
                {
                    comments.map((item,idx)=>{
                        return (<li key={idx} className="list-group-item">
                            <strong className='h6 font-weight-bold'>{item.author}</strong>
                            <p>{item.comment}</p>
                        </li>)
                    })
                }
            </ul>
            </div>
        }
        </>
    )
}