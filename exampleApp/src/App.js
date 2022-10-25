import './App.scss';
import CustomForm from './components/forms/CustomForm';
import NameSection from './components/classes/NameSection';
import Counter from './components/stateful/counter';


function App() {
  return (
    <div className="App">
      <CustomForm></CustomForm>
      <NameSection name="Pippo Pluto"></NameSection>
      <Counter></Counter>
    </div>
  );
}

export default App;
