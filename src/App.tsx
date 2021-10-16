import { Header } from "./components/Header/Index";
import { GlobalStyle } from "./styles/global";
import React from "react";
import { Dashboard } from "./components/Dashboard";
import { TransactionsProvider } from "./hooks/useTransactions";
import Modal from 'react-modal';
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";

Modal.setAppElement('#root');
export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = React.useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
