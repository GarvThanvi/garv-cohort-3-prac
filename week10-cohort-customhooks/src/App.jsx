// import "./App.css";
// import { useFetch } from "./hooks/useFetch";

// function App() {
//   // const postTitle = usePostTitle();
//   const { finalData, loading } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   if(loading){
//     return (<div>
//       Loading...
//     </div>)
//   }

//   return <div>{JSON.stringify(finalData)}</div>;
// }

// export default App;

// import { useState } from "react";
// import "./App.css";
// import { usePrev } from "./hooks/usePrev";

// function App() {
//   const [count, setCount] = useState(0);
//   const prev = usePrev(count,);
//   return (
//     <>
//       <p>{count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>Click Me</button>
//       <p>The previous value was {prev}</p>
//     </>
//   );
// }

// export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/usePrev";

function useDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn;
}

function App() {
  const sendDataToBackend = () => {
    console.log("request sent to backend");
  };

  const debouncedFn = useDebounce(sendDataToBackend);
  return <input type="text" onChange={debouncedFn} />;
}

export default App;
