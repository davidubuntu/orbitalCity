import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Transition, TransitionGroup } from "react-transition-group"
import { play, exit } from "./timelines"
import Navbar from "./components/Navbar/Navbar"
import Home from "./views/Home/Home"
import Cities from "./views/Cities/Cities"
import About from "./views/About/About"

import { library } from "@fortawesome/fontawesome-svg-core"
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons"

library.add(faTimes, faSearch)

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Route
          render={({ location }) => {
            const { pathname, key } = location
            return (
              <TransitionGroup component={null}>
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{ enter: 750, exit: 150 }}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/cities" component={Cities} />
                    <Route path="/about" component={About} />
                  </Switch>
                </Transition>
              </TransitionGroup>
            )
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export default App
