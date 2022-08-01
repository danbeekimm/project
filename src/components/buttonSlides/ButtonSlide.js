import React, {useContext} from 'react';
import * as rrd from 'react-router-dom'
// import { CareerBtnContext } from '../Main';
import styled from 'styled-components'

const Button = styled.button`
    tra
`;

const ButtonSlide = ({y,idx,catName,isChecked,dispatch}) => {
    const navi = rrd.useNavigate();
    // const {dispatch, initialState} = useContext(CareerBtnContext);
    var className = (isChecked?'isChecked-true ':'') + 'insight-button'
    // console.log('y',y)
    return (
        <>
            <button className={isChecked?'isChecked-true ':'insight-button'}
                onClick={() => {
                    dispatch({type:'switchToTrue',payload:{idx}})
                    navi('/?tag='+idx)
            }}>
                {catName}
            </button>
        </>
    );
};

export default ButtonSlide;