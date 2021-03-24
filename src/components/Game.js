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
    font-size: 6rem;
    font-weight: 500;
    text-align: center;
    padding: 5vh 0;
`;

const Moves = styled.div`
    margin: 0 auto;
    text-align: center;
    padding-top: 5vh;
`;

const Message = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: 3px solid #333333;
    background: #C7C7C7;
    width: 15vw;
    height: 5vh;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    outline: none;
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
        <Button onClick={() => jumpTo(0)}>New Game</Button>
    )

    return (
        <Container>
            <Title>Tic Tac Toe</Title>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <Moves>
                {
                    stepNumber < 9 || winner ? 
                    <Message>
                        {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
                    </Message>
                    :
                    <Message>Game Over! Try one more time :)</Message>
                }
                {renderMoves()}
            </Moves>
        </Container>
    )
}

export default Game;