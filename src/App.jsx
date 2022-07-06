
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {

  return (
    <main className="flex" >
      <aside className="w-1/6 bg-slate-200 h-screen">

      </aside>
      <section className="w-5/6 bg-orange-300 h-screen">
      <Header/>
      <section></section>
      <Footer/>
      </section>
     
    </main>
  )
}

export default App
