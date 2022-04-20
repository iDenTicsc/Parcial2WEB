import React from 'react';
import { Titulo } from './componentes/Titulo';
import { Balance } from './componentes/Balance';
import {IncomeExpenses} from './componentes/GastosEntrante'
import { TransactionList } from './componentes/ListaTransaccion';
import { AddTransaction } from './componentes/NuevaTransaccion';

import { GlobalProvider } from './contexto/ContextoGlobal';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Titulo />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;