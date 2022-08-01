import React, { Component,useState,useEffect } from 'react';
import '../App.css';
import { NavLink } from "react-router-dom";
import CommunityHeader from '../components/CommunityHeader';
import CommunityFooter from '../components/CommunityFooter';
import Comm_Home from './Comm_Home';

import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";




const Community = () => {

  

  
    return (
        <div>
                <Comm_Home/>
        </div>
    );
};


export default Community;






