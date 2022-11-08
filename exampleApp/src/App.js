import './App.scss';
import CustomForm from './components/forms/CustomForm';
import NameSection from './components/classes/NameSection';
import Counter from './components/stateful/counter';
import Weather from './components/stateful/weather';
import Generator from './components/loremipsum/Generator';


function App() {
  return (
    <div className="App">
      {/* <CustomForm></CustomForm>
      <NameSection name="Pippo Pluto"></NameSection>
      <Counter></Counter> */}
      {/*<Weather temperatures={[16,11,21,6,11,19,11]}></Weather>*/}
      <Generator></Generator>
    </div>
  );
}

export default App;
