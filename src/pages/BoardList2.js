import React,{useState,useEffect} from "react";
import '../App.css';
import axios from "axios";
import {useNavigate,useParams,Link} from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const BoardList2=()=>{
    const [data,setData]=useState('');

    //현재 페이지 번호
    const {currentPage}=useParams();

    const navi=useNavigate();

    //url 선언
    let pagelistUrl="http://localhost:9001/board/pagelist?currentPage="+currentPage;
    let photoUrl="http://localhost:9001/save/";

    //시작시 호출되는 함수 
    const pageList=()=>{
        axios.get(pagelistUrl)
        .then(res=>{
           
            setData(res.data);
        })
    }

        useEffect(()=>{
            pageList();
            console.log("photo",data)
        },[currentPage]);
    










        
        return (
            <ImageList sx={{ width: 700, height: 700 }} variant="woven" cols={1} >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=161&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          );
        }
        
        const itemData = [
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/main_visual_pc_v1.png',
            title: 'Bed',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt5_ov.png',
            title: 'Kitchen',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt6_ov.png',
            title: 'Sink',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt4_ov.png',
            title: 'Books',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt2_ov.png',
            title: 'Chairs',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt7_ov.png',
            title: 'Candle',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt3_ov.png',
            title: 'Laptop',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt1_ov.png',
            title: 'Doors',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt11_ov.png',
            title: 'Coffee',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt10_ov.png',
            title: 'Storage',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt12_ov.png',
            title: 'Coffee table',
          },
          {
            img: 'http://sanriokorea.co.kr/wp-content/themes/sanrio/images/new_main_crt14_ov.png',
            title: 'Blinds',
          },
        ];
export default BoardList2;


