import React from "react";
import '../App.css';
import {useNavigate} from 'react-router-dom';

const BoardRowItem=({idx,row})=>{
    const navi=useNavigate();

    let photoUrl="http://localhost:9001/save/";
    return (
        <tr>
            <td>{idx+1}</td>
            <td>
                <img alt='' src={photoUrl+row.photo} className="small"/>
                <b>{row.title}</b>
            </td>
            <td>
                <button type="button" className="btn btn-info btn-sm"
                onClick={()=>{
                    //navi(`/shop/detail/${row.num}`)
                    navi("/board/detail/"+row.board_id);//위와 같다
                }}>detail</button>
            </td>
        </tr>
    )
}

export default BoardRowItem;