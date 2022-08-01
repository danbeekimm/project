import React,{useEffect, useState} from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Development2.css';
import img from '../image/36.jpg';
import ImageList from '@mui/material/ImageList';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dday from "./Dday";



const Development2 = ({dto}) => {

const navi = useNavigate();
    //현재 페이지번호
    const {currentPage}=useParams();
    // const [dto,setDto]=useParams('');
    
    let photoUrl=process.env.REACT_APP_SPRING_URL+"image/";


    return (
        <div>
            <ImageList cols={3} gap={50} >
            {
                dto.list && dto.list.map((v,i)=>(

                    <Card className="card" sx={{ maxWidth: 370, textShadow:' 2px 2px 2px gray'}} 
                    onClick={()=>{navi('job_posting/detail/'+v.corp_id+'/'+v.num)}}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="200"
                            image={photoUrl+v.job_posting_photo}
                            alt="green iguana"
                            />
                            <CardContent >
                            <Typography gutterBottom variant="h5" component="div" >
                                
                                {v.job_type}<br/>
                                
                            </Typography>
                            <Typography className="typo" variant="body2" color="text.secondary">
                                <b className="date">
                                    <Dday enddate={v.end_date} key={i}/>
                                </b><br/>
                                회사명 : {v.corp_name}<br/>
                                지역 : {v.com_addr}<br/>
                                기술 : {v.preferred_tech}<br/>
                                경력 : {v.experience}<br/>
                                조회수 : {v.view_cnt}
                            </Typography>
                            
                            </CardContent>
                            <br/>
                        </CardActionArea>
                    </Card>
                    
                ))}
                </ImageList>
            
                <br/>
                {/* 페이징 */}
                <div>
                    <ul className="pagination" style={{ textAlign:'center', justifyContent: 'center'}}>
                        {
                            (dto.startPage>1?
                                <li className="page_item"><Link className="page-link" style={{color:'black'}} to={`/search/${dto.startPage-1}`}>이전</Link></li>:'')
                        }
                        {
                            //(): 자동리턴 {}: 리턴이있어야함 ,두줄이상
                            dto.parr &&
                            dto.parr.map(n=>{
                                const url="/search/"+n
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
                            <li className="page_item" ><Link className="page-link" style={{color:'black'}} to={`/search/${dto.endPage+1}`}>다음</Link></li>:'')
                        
                    }
                    </ul>
                </div>
        </div>
        
    );
};

export default Development2;

    