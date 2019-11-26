import styled from 'styled-components';

export const Span = styled.div`
position: absolute;
top: 50%;
right: 10px;
transform: translateY(-50%);
`;
export const Shadow = styled.span`
position: absolute;
bottom: 0;
right: 19%;
width: 70%;
height: 20px;
box-shadow: 13px 6px 13px #7168C8;
z-index: -1;
`;
export const LoginFormStyle = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 60vw;
background-color: white;
z-index: 999999999;
transform: translate(-50%, -50%);
border-radius: 50px;
box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.16);
h3 {
    color: #308EBF;
}
li {
    color: #C5CCD6;
}
input {
    background-color: transparent!important;
    border: none;
    border-bottom: 1px solid #E9E9F0;
    border-radius: 0px;
    &:focus {
        border-color: transparent!important;
        outline: none!important;
    }
    margin: 30px 0;
}
button {
    background-color: transparent;
    border: none;
    padding: 15px 10px ;
    background-image: linear-gradient(45deg, #64B6FF, #667EEA);
    
}
`;

