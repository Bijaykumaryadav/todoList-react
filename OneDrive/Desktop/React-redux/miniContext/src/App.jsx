import './App.css'
import UserContextProvider from "./context/UserContextProvider"

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Hi everyone this is Mr. Bijay Kumar Yarav</h1>
    </UserContextProvider>
  )
}

export default App
