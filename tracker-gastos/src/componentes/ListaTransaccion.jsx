import React, { useContext } from 'react';
import { Transaction } from './Transaccion';

import { GlobalContext } from '../contexto/ContextoGlobal';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>Historial</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}