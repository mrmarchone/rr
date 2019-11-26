import styled from 'styled-components';


export const Box = styled.div`
position: relative;
img {
    width: 100px!important;
    height: 100px!important;
    border-radius: 50%;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
}
`;