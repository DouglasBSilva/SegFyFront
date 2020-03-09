import styled from 'styled-components';

export const Text = styled.p`

overflow: hidden;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
    
`


export const CardDiv = styled.div`
    cursor: pointer; 
    transition: all .2s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 8px 1px gray;
        transform: scale(1.1);
    }
`;