import { CharacterList } from "./components/CharacterList";
import "./App.css"
import "./index.css"
import Title from "./components/Title";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="background">
<Title />
<CharacterList/>

    </div>
  );
}

export default App;
