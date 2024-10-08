import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <UserContextProvider>
      <h1>Hi, everyone this is Mr. Bijay Kumar Yarav</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App