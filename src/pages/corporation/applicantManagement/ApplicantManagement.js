import React, { useState, useRef, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import NewResume from '../applicantsStatus/NewResume';
import styled from 'styled-components';

const Container = styled.div`
    margin-top:50px;

`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export const ApplicantContext = createContext();

const ApplicantManagement = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [resumeList, setResumeList] = useState([]);
    const [cat, setCat] = useState(0);

    const [cat2, setCat2] = useState(true);

    useEffect(() => {
        const getNewResume = process.env.REACT_APP_SPRING_URL + "corpManagement/getNewResume?corp_idx=" + 1 + "&progress=" + cat;
        axios.get(getNewResume)
            .then((res) => {
                console.log("1데이터res.data", res.data)
                setResumeList(res.data);
            })
            .catch(err => {
                console.log("에러가 났슈~")
            })
    }, [cat, cat2])


    return (
        <ApplicantContext.Provider value={{cat, cat2, setCat2}}>
            <Container>
                <Box sx={{ width: '1060px',maxWidth:'1060px',margin:'0 auto' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                            <Tab label={`신규`} {...a11yProps(0)}
                            onClick={() => {
                                setCat(0);
                            }}/>
                            <Tab label={`서류통과`} {...a11yProps(1)}
                            onClick={() => {
                                setCat(1);
                            }}/>
                            <Tab label={`최종합격`} {...a11yProps(2)}
                            onClick={() => {
                                setCat(2);
                            }}/>
                            <Tab label={`불합격`} {...a11yProps(3)}
                            onClick={() => {
                                setCat(3);
                            }}/>
                            {/* <Tab label={`기간만료`} {...a11yProps(4)}
                            onClick={() => {
                                setCat(4);
                            }}/> */}
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <NewResume resumeList={resumeList} setCat={setCat}/>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <NewResume resumeList={resumeList} setCat={setCat}/>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <NewResume resumeList={resumeList} setCat={setCat}/>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <NewResume resumeList={resumeList} setCat={setCat}/>
                    </TabPanel>
                    {/* <TabPanel value={value} index={4}>
                        <NewResume resumeList={resumeList} setCat={setCat}/>
                    </TabPanel> */}
                </Box>
            </Container>
        </ApplicantContext.Provider>
    );
};

export default ApplicantManagement;