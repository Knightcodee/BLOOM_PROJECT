import AllRoutes from "./components/AllRoutes"

function App() {

  return (
    <BrowserRouter basename={window.location.pathname || '' }>
    <>
      <AllRoutes />
    </>
    </BrowserRouter>
  )
}

export default App
