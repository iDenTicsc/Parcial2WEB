import React, {useState, useContext} from 'react'
import { GlobalContext } from '../contexto/ContextoGlobal';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Nueva Transaccion</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Titulo</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ingrese el nombre..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Monto <br />
            (Numeros negativos - Gastos, Numeros positivos - Ganancias)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Ingrese el Valor..." />
        </div>
        <button className="btn">Añadir Transaccion</button>
      </form>
    </>
  )
}  