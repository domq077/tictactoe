import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateWinner } from '../helper';
import Board from './Board';

const Container = styled.div`
    widht: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
`;

const Title = styled.h1`
    font-size: 7.5vw;
    font-weight: 900;
    text-align: center;
    padding: 5vh 0;
`;

const Moves = styled.div`
    width: 200px;
    margin: 20px auto;
`;

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        // If user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? 'X' : 'O';
        setHistory([...timeInHistory, squares]);
        setStepNumber(timeInHistory.length);        
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    };

    const renderMoves = () => (
        history.map((_step, move) => {
            const destination = move ? `Go to move#${move}` : 'Go to start';
            return (
                <li key={move}>
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            )
        })        
    )

    return (
        <Container>
            <Title>Tic Tac Toe</Title>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <Moves>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </Moves>
        </Container>
    )
}

export default Game;