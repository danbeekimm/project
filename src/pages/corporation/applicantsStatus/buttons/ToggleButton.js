import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import styled from 'styled-components';

const ToggleSelect = styled.button`
    
`;

const ToggleButton = ({ size, name }) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    return (
        <>
            <Button variant="outlined" style={{margin:'0 20px'}} size={size} aria-describedby={id} type="button" onClick={handleClick}>{name}</Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex',flexDirection:'column',marginTop:'5px' }}>
                            <ToggleSelect
                                onClick={()=>{

                                }}>서류통과</ToggleSelect>
                            <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'10px',justifyContent: 'center'}}>
                                <p style={{borderBottom:'1px solid lightgray',width:'75px'}}></p>
                            </div>
                            <ToggleSelect>불합격</ToggleSelect>
                        </Box>
                    </Fade>
                )}
            </Popper>
        </>

    );
};

export default ToggleButton;