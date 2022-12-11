import styles from './App.module.scss';
import KeenSliderComp from './components/KeenSliderComp/KeenSliderComp';
import SimpleImageSlider from './components/SimpleImageSlider/SimpleImageSlider';


function App() {
  return (
    <div className={` w-full h-[100vh] flex justify-center items-center ${styles.appContainer}`}>
      <KeenSliderComp
      />
    </div>
  );
}

export default App;
