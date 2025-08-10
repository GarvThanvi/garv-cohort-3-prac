import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/counterAtom.js';



function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
      <IsEven/>
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(counterAtom);
  return <button onClick={() => setCount(count => count + 2)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(counterAtom);
  return <p>Count: {countValue}</p>;
}

function IsEven(){
  const even = useRecoilValue(evenSelector);
  if(even){
    return <div>Even</div>
  }
  return <div>Odd</div>
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;