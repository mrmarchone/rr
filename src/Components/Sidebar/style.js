import styled from 'styled-components';

export const ASIDE = styled.div`
transition: all 0.4s linear;
overflow: hidden;
position: fixed;
right: 0;
top: 0;
width: ${props => props.side === false ? '0px' : '250px'};
height: 100%;
background-color: white;
z-index: 99999999;
i {
color: #308EBF;
}
`;

export const SPAN = styled.span`
color: #308EBF;
`;

export const LI = styled.li`
margin: 20px 0;
font-size: 20px;
cursor: pointer;
transition: all 0.4s linear;
position: relative;
&:hover {
    color: #308EBF;
    transform:  translateX(10px);
    &::after {
    opacity: 1;
    }
    
}
&::after {
    transition: all 0.4s linear;
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 0;
    right: 0;
    background-color: #30BF6E;
    opacity: 0;
}
`;