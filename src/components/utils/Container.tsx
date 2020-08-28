import styled from "styled-components";

export const Container = styled.div<{ padding?: any, height?: any }>`
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    padding: ${(props) => props.padding ? `${props.padding}px` : '0'};
    height: ${(props) => props.height ? `${props.height}%` : '0'};
`;