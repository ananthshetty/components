import styles from './App.module.scss';
import DoughnutChart from './components/DoughnutChart/DoughnutChart';
import KeenSliderComp from './components/KeenSliderComp/KeenSliderComp';
import OverlappedCardsAnimation from './components/overlappedCardsAnimation/OverlappedCardsAnimation';
import SimpleImageSlider from './components/SimpleImageSlider/SimpleImageSlider';


function App() {
  return (
    <div className={` w-full h-[100vh] flex justify-center items-center ${styles.appContainer}`}>
      {/* <KeenSliderComp/> */}
      {/* <OverlappedCardsAnimation/> */}
      <DoughnutChart />
    </div>
  );
}

export default App;
