import styled from 'styled-components';


export const ContactSection = styled.section`
background-color: #F7F7F7;
`;

export const Span = styled.span`
display: inline-block;
width: 80px;
height: 4px;
background-color: #226BE2;
`;
export const Box = styled.div`
.left {
    background-color: #ffffff;
    i {
        color: #226BE2;
    }
    p {
        color: gray
    }
}
.right {
    input, textarea {
        border: none;
        resize: none
    }
    textarea {
        height: 100px;
    }
    button {
        background-color: #308EBF;
        border: none
    }
}
`;