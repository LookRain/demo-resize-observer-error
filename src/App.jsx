import {VList} from 'virtua';
import './App.css';

// in Chrome error is not console.error-ed, so this is needed
// but in Safari the errors are already printed
window.addEventListener('error', (event) => {
  console.error('captured error', event);
});

const createRows = (num) => {
  const heights = [20, 40, 80, 77];
  return Array.from({length: num}).map((_, i) => {
    return (
      <div
        key={i}
        style={{
          height: heights[i % 4],
          borderBottom: 'solid 1px #ccc',
          background: '#fff',
        }}
      >
        {i}
      </div>
    );
  });
};

function App() {
  return (
    <>
      asdf
      <VList
        style={{
          height: '100vh',
          width: 700,
        }}
      >
        {createRows(1000)}
      </VList>
    </>
  );
}

export default App;
