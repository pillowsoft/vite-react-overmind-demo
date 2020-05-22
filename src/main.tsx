import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { App } from "./App"
import { overmind } from "./overmind-store"
import { Provider } from "overmind-react"

ReactDOM.render(
  <React.StrictMode>
    <Provider value={overmind}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
