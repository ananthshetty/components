import styles from './App.scss';


function App() {
  return (
    <div className={`${styles.appContainer} ${styles.App}`}>
      <div className='w-[300px] bg-black flex flex-col justify-center items-center gap-[50px]'>
        <p className='p-2 font-bold text-black bg-white'>Hello World</p>
        <p className='p-2 font-bold text-black bg-white'>Hello World - 2</p>
      </div>
    </div>
  );
}

export default App;
