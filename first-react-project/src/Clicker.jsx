function ShowClickerMessage(message) {
    alert(message);
}

function Clicker({ message, buttonText }) {
    return (
        <div>
            <button onClick={() => ShowClickerMessage(message)}>
                {buttonText}
            </button>
        </div>
    );
}

export default Clicker;