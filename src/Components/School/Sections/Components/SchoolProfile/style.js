import styled from 'styled-components';
export const Li = styled.li`
color: #C5CCD6;
cursor: pointer;
transition: all 0.2s linear;
margin-left: 20px;
&.active {
    color: #3B3B3B;
    border-bottom: 2px solid #226BE2;
}
&:hover {
    color: #3B3B3B;
    border-bottom: 2px solid #226BE2;
}
`;

export const Ul = styled.ul`
background-color: white;
border-radius: 10px;
box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.16);
li {
    width: 100%;
    cursor: pointer;
    &:not(:last-of-type) {
        border-right: 2px solid #C5CCD6;
    }
    &.active {
        position: relative;
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 5px;
            background-image: linear-gradient(45deg, #665EFF, #5773FF, #3497FD, #3ACCE1);
            bottom: -23px;
            left: 0px;
        }
    }
}
`;


export const ParentTable = styled.div`
background-color: white;
border-radius: 7px;
box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.16);
color: #454F63;
`;