import React from 'react';
import './App.css';
import HookCounter from './component/useState/HookCounter';
import HookCounterTwo from './component/useState/HookCounterTwo';
import HookCounterThree from './component/useState/HookCounterThree';
import HookCounterFour from './component/useState/HookCounterFour';
import HookCounterOne from './component/useEffect/HookCounterOne';
import HookMouse from './component/useEffect/HookMouse';
import MouseContainer from './component/useEffect/MouseContainer';
import InternalHookCounter from './component/useEffect/InternalHookCounter';
import DataFetching from './component/fetch/DataFetching';
import DataFetching2 from './component/fetch/DataFetching2';
import DataFetching3 from './component/fetch/DataFetching3';
import ComponentC from './component/useContext/ComponentC'
import {UserContext,ChannelContext} from './component/useContext/UserContext'
import Counter from './component/memohook/Counter';
import FocusInput from './component/useRef/FocusInput';
import ClassTimer from './component/memohook/ClassTimer';



function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      <HookCounterTwo/>
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <MouseContainer/> */}
      {/* <InternalHookCounter/> */}
      {/* <DataFetching/> */}
      {/* <DataFetching2/> */}
      {/* <DataFetching3/> */}



      {/*================== using context in class ===================== */}
      {/* <UserContext.Provider value={'Vishwas'}>
        <ChannelContext.Provider value={'Codevolution'}>
					<ComponentC />
				</ChannelContext.Provider>
			</UserContext.Provider> */}


      {/*========================useMemo hook ================================*/}
      <Counter/>

      {/*========================useRef hook ================================*/}
      <FocusInput/>

      <ClassTimer/>

      {/* ================ Custom Hooks ============================ */}
      
    </div>
  );
}

export default App;
