import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

function App(){
  return (
    // <h1 className="title">Hey this is my first component {2+2}</h1>
    <>
    <Header />
    {/* <h1>After header</h1> */}
    <MainContent />
    {/* <h1>After main content</h1> */}
    <Footer />
    </>
  )
}

export default App;