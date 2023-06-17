import { useState } from "react";
import Header from "./components/pages/Header";
import Main from "./components/pages/Main";
import Success from "./components/pages/Success.";

function App() {
  const [success, setSuccess] = useState(null);

  return (
    <div className="App lg:flex lg:flex-row-reverse lg:items-center lg:max-w-[58rem] lg:m-auto">
      {!success && (
        <>
          <Header />
          <Main setShowSuccess={setSuccess} />
        </>
      )}

      {success && <Success setShowSuccess={setSuccess} />}
    </div>
  );
}

export default App;
