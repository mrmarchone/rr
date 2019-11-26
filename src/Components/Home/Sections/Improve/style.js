import styled from 'styled-components';

export const Img = styled.img`
@media (max-width: 500px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
}
clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
`;

export const ImproveSection = styled.section`
background-image: linear-gradient(-95deg, #24609C, #6B1D56);
`;

export const Content = styled.div`
h3 {
    font-weight: bold;
}
`;

export const Article = styled.article`
width: 300px
`;