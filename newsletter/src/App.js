import { useState } from "react";
import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Success from "./components/pages/Success.";

function App() {
  const [success, setSuccess] = useState(null)

  return (
    <div className="App">
      <Header />
      <Main />
      {success && <Success setShowSuccess={setSuccess}/>}
    </div>
  );
}

export default App;
