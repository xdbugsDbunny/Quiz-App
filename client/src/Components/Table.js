import React, { useEffect, useState } from 'react'
import { getDataFromServer } from '../hepler/helper'

const Table = () => {

    const [data, setData] = useState([])
    useEffect(()=>{
        getDataFromServer("http://localhost:5000/result",(res)=>{
            setData(res)
        })
    })

  return (
    <div className='row'>
        <h1 style={{textAlign:'center'}}>Leaderboard</h1>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
            <table className='table table-success table-hover table-bordered table-striped'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Attempts</th>
                        <th>Result</th>
                    </tr>
                    {    !data ?? <div>No Data Found</div> }
                    {
                        data.map((item,index)=>(
                            <tr key={index}>
                                <td>{item?.username || ''}</td>
                                <td>{item?.points || 0}</td>
                                <td>{item?.attempts || 0}</td>
                                <td>{item?.achived || ""}</td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </div>
        <div className='col-md-3'></div>
    </div>
  )
}

export default Table