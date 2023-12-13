/**
 * Функция Square принимает два значения (пропса/props) и возвращает кнопку
 * Первое: значение value ('X', 'O', или null) получается из squares[i] через хук useState
 * Второе: функция onSquareClick (некий триггер) который будет вызывать другую функцию handleClick
 */ 

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;