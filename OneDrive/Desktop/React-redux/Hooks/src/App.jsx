import "./App.css";
import Card from "./components/Card";

function App() {

  let myObj = {
    username: "Bijay",
    age: '21'
  }
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <div>
          <button className="bg-red-600 rounded-xl px-4  items-center mb-4">
            Subscribe
          </button>
          <Card name="bijay" someObj = {myObj}/>
          <Card name="gullu"/>
        </div>
      </div>
    </>
  );
}

export default App;
