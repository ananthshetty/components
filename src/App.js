import styles from './App.module.scss';
import RTable from './components/RTable/RTable';
import ReduxToolkitCounterApp from './components/ReduxToolkitCounterApp/ReduxToolkitCounterApp';
import Memo from './components/reactMemo/Memo';


function App() {
  return (
    <div className={` w-full h-[100vh] flex justify-center items-center ${styles.appContainer}`}>
      <ReduxToolkitCounterApp />
      {/* <Memo/> */}
      {/* <RTable/> */}
      {/* <KeenSliderComp
      /> */}
    </div>
  );
}

export default App;
