import './App.css';
import { ActionButton, ActionButtonSizes } from 'components';
import { useCallback, useState } from 'react';

function App() {
  const [disabled, setDisabled] = useState<boolean>(false);

  const flipDisabled = useCallback(() => {
    setDisabled(disabled => !disabled);
  }, []);

  return (
    <div className="App">
      <ActionButton size={ActionButtonSizes.small} onClick={flipDisabled}>Create new</ActionButton>
      <ActionButton size={ActionButtonSizes.medium}>Create new</ActionButton>
      <ActionButton size={ActionButtonSizes.big} disabled={disabled}>Create new</ActionButton>
    </div>
  );
}

export default App;
