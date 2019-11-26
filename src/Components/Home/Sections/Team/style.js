import styled from 'styled-components';


export const Img = styled.img`
${props => props.qoma ? `
position: absolute;
top: ${props.left ? '-150px' : '-50px'};
${props.right ? 'right: -40px' : 'left: -60px'};
transform: scale(0.7);
` : `
width: 150px;
height: 150px;
border-radius: 50%;
margin-bottom: 20px;
`}
`;


export const Paragraph = styled.div`
button {
    padding-left: 5%;
    padding-right: 5%;
    background-color: #308EBF;
    color: white;
    border-radius: 20px;
    transition: all 0.4s linear;
    &:hover {
        background-color: transparent;
        color: #308EBF;
        border: 1px solid #308EBF;
    }
}
`;