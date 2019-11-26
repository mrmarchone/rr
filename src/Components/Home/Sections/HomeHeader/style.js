import styled from 'styled-components';
export const Header = styled.header`
width: 100%;
background-image: url('vendor/images/header1.svg');
background-size: cover;
background-position: center center;
`;
export const Title = styled.h1`
font-size: 90px;
font-weight: 600;
`;

export const Content = styled.div`
padding-top: 300px;
padding-bottom: 150px;
`;

export const Paragraph = styled.div`
width: 40%;
line-height: 41px;
`;

export const Buttons = styled.div`
    .btn2 {
        background-color: #30BF6E;
        border: none;
        width: 100px;
        border-radius: 20px;
    }
    .btn1 {
        background-color: #308EBF;
        border: none;
        width: 100px;
        border-radius: 20px;
    }
`;

export const Chat = styled.div`
position: fixed;
bottom: 30px;
right: 30px;
img {
    width: 50px
}
`;