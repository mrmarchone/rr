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