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
      <ActionButton label="Create new" size='small' onClick={flipDisabled}></ActionButton>
      <ActionButton label="Create new" size='medium'></ActionButton>
      <ActionButton label="Create new" size='large' disabled={disabled}></ActionButton>
    </div>
  );
}

export default App;
