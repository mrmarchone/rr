import styled from 'styled-components';



export const Poly = styled.div`
height: 500px;
width: 100%;
clip-path: ${props => props.right ? "polygon(100% 0%, 0% 50%, 100% 100%)" : "polygon(0% 0%, 0% 100%, 100% 50%)"};
background-image: ${props => props.right ? "url('vendor/images/school.jpg')" : "url('vendor/images/teacher.jpg')"};
background-size: cover;
background-position: center center;
position: relative;
`;
export const Overlay = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: #013c758c;
`;

export const Content = styled.div`
background-image: url('vendor/images/teacherSchoolNos.png');
background-repeat: no-repeat;
background-size: 100% 70%;
background-position: center center;
height: 100%;
padding-top: 50%;
padding-bottom: 50%;
article {
    font-size: 25px;
    width: 85%;
    margin: 0 auto;
    font-weight: 800;
}
button {
    color: white;
    background-color: #308EBF;
    border-radius: 20px;
    transition: all 0.2s linear;
    padding-left: 30px;
    padding-right: 30px;
    &:hover {
        background-color: transparent;
        border: 1px solid #308EBF;
        color: #308EBF;
    }
}
`;

export const Paragraph = styled.div`
position: absolute;
top: 50%;
left: 40%;
transform: ${props => props.right ? 'translate(0%, -50%)' : 'translate(-50%, -50%)' };
text-align: center;
color: white;
`;


export const Img = styled.img`
position: absolute;
top: ${props => props.right ? '0%' : '-320px'};
left: ${props => props.right ? '150px' : '120px'};
z-index: -999;
transform: rotate(180deg) scale(1.5);
`;