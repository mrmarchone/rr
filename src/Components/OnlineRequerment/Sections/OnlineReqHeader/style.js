import styled from 'styled-components';
export const Header = styled.header`
width: 100%;
background-image: url('vendor/images/wallAbout.png');
background-size: cover;
background-position: center center;
position: relative;
`;
export const Title = styled.h1`
font-weight: 600;
`;

export const Content = styled.div`
padding-top: 300px;
padding-bottom: 150px;
`;

export const Paragraph = styled.div`
line-height: 41px;
`;

export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #013c7561 ;
top: 0;
left: 0;
`;