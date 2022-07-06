import Content from './Components/Content/Content.jsx'

function App() {

  return (
    <main className="flex">
      <aside className="w-1/6 bg-slate-200 h-screen">
      </aside>

      <section className="w-5/6 bg-orange-300 h-screen">
        
        <header></header>
        <section>
          <Content/>
        </section>

        <footer></footer>
      </section>
    </main>
  )
}

export default App
