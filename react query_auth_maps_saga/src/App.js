import Example1 from "./Example1";
import Example2 from "./Example2";

// import ReduxSaga from "./redux-saga/index";
// import GoogleAuth from "./auth/googleOauth";
// import FbLogin from "./auth/fbLogin";

function App() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div className="App" onClick={()=> { console.log("from background") }}>
      <button onClick={()=> setOpen(true)}>Open modal</button>
      <Modal isOpen={isOpen} />      
      <Example2 />
    </div>
  );
}

export default App;
