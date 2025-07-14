import './App.css';
import { useState } from 'react';


export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
    <div className='App'>
      <h2>Almaty, Kazakhstan</h2>
      <Panel title="Tentang" isActive={activeIndex === 0} onShow={()=> setActiveIndex(0)}>
        Dengan populasi sekitar 2 juta, Almaty adalah kota terbesar di Kazakhstan. Dari tahun 1929 hingga 1997, itu adalah ibu kota negara tersebut.
      </Panel>
      <Panel title="Etimologi" isActive={activeIndex === 1} onShow={()=>setActiveIndex(1)}>
        Nama berasal dari <span lang="kk-KZ">алма</span>, kata Kazakh untuk "apel" dan sering diterjemahkan sebagai "penuh dengan apel". Faktanya, wilayah sekitar Almaty dipercaya sebagai rumah leluhur apel, dan tanaman liar <i lang="la">Malus sieversii</i> dianggap sebagai kandidat yang mungkin untuk leluhur apel domestik modern.
      </Panel>
    </div>
    </>
  );
}

function Panel({ title, children, isActive, onShow }) {
  // const [isActive, setIsActive] = useState(false);
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Tampilkan
        </button>
      )}
    </section>
  );
}






// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
        
//       </header>
//     </div>
//   );
// }

// export default App;
