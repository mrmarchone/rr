import styled from 'styled-components';

export const LoginForm = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000063;
z-index: 999999999;
display: ${props => props.show === false ? 'none' : 'block'}
`;



export const Searchh = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: black;
z-index: 99999;
display: ${props=> props.show === false ? 'none' : 'block'}
`;


export const InputSearch = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 50%;
`;