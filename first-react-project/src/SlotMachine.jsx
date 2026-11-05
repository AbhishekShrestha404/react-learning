export default function SlotMachine({ value1, value2, value3 }) {

    const isWinner = (value1 === value2 && value1 === value3)
    const winOrLose =
        isWinner
            ? 'You Win'
            : 'You Lose';

    const color = isWinner ? 'blue' : 'red';

    return (
        <div>
            <h1>{value1} {value2} {value3}</h1>

            <h2 style={{ color }}>{winOrLose}</h2>

            {winOrLose === 'You Win' && (
                <h3 style={{ color: 'black' }}>
                    Congrats!!!
                </h3>
            )}
        </div>
    );
}