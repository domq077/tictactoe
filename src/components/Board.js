import React from 'react';
import Square from './Square';

const Board = ({squares, onClick}) => (
    <div>
        <Square value='1' onClick={() => onClick('1')} />
        <Square value='2' onClick={() => onClick('1')} />
        <Square value='3' onClick={() => onClick('1')} />
        <Square value='4' onClick={() => onClick('1')} />
        <Square value='5' onClick={() => onClick('1')} />
        <Square value='6' onClick={() => onClick('1')} />
        <Square value='7' onClick={() => onClick('1')} />
        <Square value='8' onClick={() => onClick('1')} />
        <Square value='9' onClick={() => onClick('1')} />
    </div>
);

export default Board;