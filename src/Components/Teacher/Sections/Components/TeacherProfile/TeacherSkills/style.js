import styled from 'styled-components';

export const Parent = styled.div`
background-color: #F1F2F5;
border-radius: 10px;
margin-bottom: 30px;
`;


export const Child = styled.div`
border-radius: 10px;
`;

export const Circle = styled.div`
width: 10px;
height: 10px;
border-radius: 50%;
display: inline-block;
`;
export const Ul = styled.ul`
background-color: white;
border-radius: 10px;
box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.16);
li {
    cursor: pointer;
    &:not(:last-of-type) {
        border-right: 2px solid #C5CCD6;
    }
    font-size: 10px;
    padding-right: 20px
}
`;

export const Plus = styled.div`
background-color: white;
border-radius: 7px;
box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.16);
width: 50px;
padding: 10px 0;
text-align: center;
color: #454F63;
`;