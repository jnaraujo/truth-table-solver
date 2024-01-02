import "unfonts.css"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Providers from "./components/providers"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
)
