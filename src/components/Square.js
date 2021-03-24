import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #F2ECFF;
    border: 2px solid darkblue;
    font-size: 40px;
    font-weight: 900;
    cursor: pointer;
    outline: none;
`;

const Square = ({onClick, value}) => (
    <Button onClick={onClick}>
        {value}
    </Button>
);

export default Square;