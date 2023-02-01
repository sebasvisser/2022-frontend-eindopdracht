import './App.css';
import NavBar
    from "./components/Navbar";

function App() {
  return (
   <>
       <NavBar />
       <header>
           <h1>Weekend Escapes</h1>
           <nav>
               <a href="https://google.com">one word</a> |
               <a href="https://google.com">one word</a> |
               <a href="https://google.com">one word</a> |
               <a href="https://google.com">one word</a>
           </nav>
       </header>
       <main>
           <header>
               <h1>five words</h1>
           </header>
           <section>
               <h2>three words</h2>
               <p>forty-six words</p>
               <p>forty-four words</p>
           </section>
           <section>
               <h2>seven words</h2>
               <p>sixty-eight words</p>
               <p>forty-four words</p>
           </section>
       </main>
       <footer>
           <p>five words</p>
       </footer>
   </>
  );
}

export default App;
