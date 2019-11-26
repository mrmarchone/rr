import styled from 'styled-components';

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

export const Audio = styled.div`
    width: 100%;
    height: 15px;
    background-color: red;
`;

export const Bar = styled.div`
    width: 100%;
    height: 10px;
    background-image: linear-gradient(45deg, #395AFF, #FE5FAF);
    position: relative;
`;

export const Circle = styled.div`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) translateX(0%);
    left: 0%;
    box-shadow: 0px 0px 14px rgba(69, 91, 99, 0.46);
`;

export const Buttons = styled.div`
    button {
        background-color: transparent;
        border: none;
        &:not(:first-of-type) {
            margin-left: 40px;
        }
        &:nth-of-type(2) {
            background-color: #308EBF;
            color: white;
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
`;