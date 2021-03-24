import React from 'react';
import styled from 'styled-components';
import Square from './Square';

const Container = styled.div`
    border: 2px solid darkblue;
    width: 300px;
    height: 300px;
    margin: 0 auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;

const Board = ({squares, onClick}) => (
    <Container>
        {squares.map((square, i) => <Square key={i} value={square} onClick={() => onClick(i)} />)}
    </Container>
);

export default Board;