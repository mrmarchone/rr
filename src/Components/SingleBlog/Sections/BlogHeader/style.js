import styled from 'styled-components';
export const Header = styled.header`
width: 100%;
background-image: url('vendor/images/wallAbout.png');
background-size: cover;
background-position: center center;
height: 100%;
position: relative;
height: 400px;
`;

export const Title = styled.h1`
font-weight: bolder;
color: #013C75;
margin: 30px 0 0 0;
`;

export const Content = styled.div`
color: #343333;
margin: 20px 0;
p {
    white-space: wrap;
    font-size: 14px
}
`;

export const Paragraph = styled.div`
line-height: 41px;
`;
export const Icon = styled.div`
display: inline-block;
margin-right: 20px;
`;
export const Overlay = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-color: #013c7561 ;
top: 0;
left: 0;
`;