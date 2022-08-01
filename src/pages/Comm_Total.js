import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from 'react-router-dom';
import '../App.css';

import BoardForm from "./BoardForm";
import BoardList1 from "./BoardList1";
import BoardList2 from "./BoardList2";
import BoardList3 from "./BoardList3";
import Write from "./Write";
import CommunityHeader from "../components/CommunityHeader";
import CommunityFooter from "../components/CommunityFooter";
import { padding } from "@mui/system";
import Community from "./Community";
import Comm_Home from "./Comm_Home";
import axios from "axios";
import { CommunitySaveContext } from "../contexts/CommunitySaveContext";

const Comm_Total = (props) => {

    const {category, setCategory}=useContext(CommunitySaveContext);
    const [data, setData] = useState('');
    const [cat, setCat] = useState('')
   
    let list = [];

    const navi = useNavigate();

    //url 선언
    let url = "http://localhost:9001/board/alllist?category_name=" + cat;
    let photoUrl = "http://localhost:9001/save/";


    //시작시 호출되는 함수 
    const pageList=()=>{
        axios.get(url)
        .then(res=>{
           
            setData(res.data);
        })
    }

    useEffect(()=>{
        console.log(cat);
        pageList();
      },[url]);

        function sendData(value){
            props.setTest(value);
            console.log(value);
        }
    


    // const getData = () => {
    //     axios.get(pagelistUrl)
    //         .then(res => {
    //             list = [...res.data];
    //             console.log("성공", res.data);

    //         })

    // }

    // useEffect(() => {
    //     getData();
    // }, [cat]);

    return (

        <div>
            {/* {category} */}
            <div className='green' style={{ border: "1px solid #ffff", width: "200%", height: "100px" }}>
                <div style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "70px" }}>
                    <div className='total_button2'>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={()=>{
                                navi("/board/list/1");
                                }}>전체글</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('커리어')
                            }}>커리어</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('QandA')
                            }}>Q&A</button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('취준')
                            }}>취준</button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('이직')
                            }}>이직</button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('퇴사')
                            }}>퇴사</button>
                        <button type="button" class="btn btn-outline-primary"
                            onClick={() => {
                                sendData('잡담')
                            }}>잡담</button>

                        <button type="button" class="btn btn-outline-primary"
                            onClick={()=>{
                        navi("/board/categoty");
                        }}>카테고리</button>
                    </div>
                </div>
                <div className='red2' style={{ border: "1px solid #ffff", float: "left", width: "100%", height: "10px" }}>
                   
                </div>


            </div>
        </div>
    );
};

export default Comm_Total;