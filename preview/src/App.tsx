import './App.css';
import { useCallback, useState } from 'react';
import { Agreement } from './Agreement/Agreement';

const ButtonSizes = ["large", "medium", "small"] as const;

function App() {
  const [signedCount, setSignedCount] = useState<number>(0);

  const signNextAgreement = useCallback(() => {
    setSignedCount(signedCount => signedCount + 1);
  }, []);

  const agreements = Array(signedCount + 1).fill(0).map((_, i) => {
    return <Agreement 
      key={i} 
      onAgree={signNextAgreement} 
      isSigned={signedCount > i} 
      buttonSize={ButtonSizes[i % ButtonSizes.length]}
    />
  })

  return (
    <div className="App">
      {agreements}
    </div>
  );
}

export default App;
