import React,{useState,useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import './ResumeSearch.css';
import axios from "axios";
import img from '../image/mine.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ResumeCharts from "./ResumeCharts";
import TotalYear from "./TotalYear";
import { fontSize } from "@mui/system";
import { Button } from "@mui/material";


const ResumeSearch=({dto})=>{
    console.log("dto",dto.list);
    const {currentPage}=useParams();
    const navi=useNavigate();
    
    
    return(
        <div className="list1">
            <div className="underline_corp">
            
                <List sx={{ width: '100%',bgcolor: 'background.paper' ,}}>
                
                        {
                            dto.list && dto.list.map((v,i)=>(
                                
                                <ListItem alignItems="flex-start">
                                <ListItemAvatar style={{fontSize:'2rem'}}>
                                
                                <img alt="Remy Sharp" src={v.user_photo} style={{width:'200px',marginTop:'5px', height:'210px'}} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary=""
                                    secondary={
                                <React.Fragment>
                                    <span className="title">소제목 [{v.res_name}]</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span className="devlop">지원직군 : </span><span>{v.job_type}</span><br/>
                                    <span className="write">{v.writeday}</span><br/>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    
                                    <div className="name justifyAsia">이&emsp;&emsp;름: <span className="tit">&nbsp;{v.name}</span></div>
                                    <div className="birth justifyAsia">생년월일: <span className="tit">{v.user_birth}</span></div>
                                    <div className="tech justifyAsia">기술스택: <span className="tit">{v.tech_tags}</span></div>
                                    <div className="expri justifyAsia">경&emsp;&emsp;력: <span className="tit"><TotalYear year={v.total_year}/>년</span></div>
                                    <div className="just">자기소개:
                                    <p className="intro justifyAsia" > {v.intro}</p></div>
                                    <Button className='btndetail' type='button' variant="contained"
                                    onClick={()=>{navi('resume/detail/'+v.username+'/'+v.resume_idx)}}>상세보기</Button>
                                    
                                </Typography>
                                
                                
                                <span className="file">{v.pot_file}</span>
                                <hr/>
                                
                                </React.Fragment>
                                    
                                }
                            /><br/><br/><br></br>
                            
                </ListItem>
                    
                ))
                }
                </List>
            
                
            </div>
        {/* 페이징 */}
        <div>
                    <ul className="pagination" style={{ textAlign:'center', justifyContent: 'center'}}>
                        {
                            (dto.startPage>1?
                                <li className="page_item"><Link className="page-link" style={{color:'black'}} to={`/pagelist/${dto.startPage-1}`}>이전</Link></li>:'')
                        }
                        {
                            //(): 자동리턴 {}: 리턴이있어야함 ,두줄이상
                            dto.parr &&
                            dto.parr.map(n=>{
                                const url="/pagelist/"+n
                                return(
                                    <li className="page_item">
                                        <Link className="page-link" to={url}>
                                            <b  style={{color:n===Number(currentPage)?'cornflowerblue':'black'}}>{n}</b></Link>
                                    </li>
                                )

                            })
                        }
                    {
                        (dto.endPage<dto.totalPage?
                            <li className="page_item" ><Link className="page-link" style={{color:'black'}} to={`/pagelist/${dto.endPage+1}`}>다음</Link></li>:'')
                        
                    }
                    </ul>
                </div>
        </div>
    )
}

    
export default ResumeSearch;