import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useExchange() {
  const [page, setPage] = useState('home');

  return { page, setPage };
}

const ExchangeState = createContainer(useExchange);

export default ExchangeState;
