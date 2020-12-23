import React from 'react'
import Home from './Components/MainPages/Home'
import About from './Components/MainPages/About'
import Boards from './Components/MainPages/Boards'
import Board from './Components/Board'
import Error from './Components/MainPages/Error'
import Thread from './Components/Thread'
import { Route, Switch } from 'react-router-dom'
import { catchesProps, tipsntricksProps, recipesProps, tackleProps, mensfashionProps, womensfashionProps, anythingProps, suggestionsProps} from './config/routeProps'
import './App.css';

function App() {
  return (
    <div className='background' id='background'>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Route path='/boards' component={Boards} />
        <Route exact path='/catches' render={(props) => (<Board {...props} {...catchesProps} />)}/>
        <Route path='/catches/:_id' render={(props) => (<Thread {...props} {...catchesProps} />)}/>
        <Route exact path='/tipsntricks' render={(props) => (<Board {...props} {...tipsntricksProps} />)}/>
        <Route path='/tipsntricks/:_id' render={(props) => (<Thread {...props} {...tipsntricksProps} />)}/>
        <Route exact path='/recipes' render={(props) => (<Board {...props} {...recipesProps} />)}/>
        <Route path='/recipes/:_id' render={(props) => (<Thread {...props} {...recipesProps} />)}/>
        <Route exact path='/tackle' render={(props) => (<Board {...props} {...tackleProps} />)}/>
        <Route path='/tackle/:_id' render={(props) => (<Thread {...props} {...tackleProps} />)}/>
        <Route exact path='/mensfashion' render={(props) => (<Board {...props} {...mensfashionProps} />)}/>
        <Route path='/mensfashion/:_id' render={(props) => (<Thread {...props} {...mensfashionProps} />)}/>
        <Route exact path='/womensfashion' render={(props) => (<Board {...props} {...womensfashionProps} />)}/>
        <Route path='/womensfashion/:_id' render={(props) => (<Thread {...props} {...womensfashionProps} />)}/>
        <Route exact path='/anything' render={(props) => (<Board {...props} {...anythingProps} />)}/>
        <Route path='/anything/:_id' render={(props) => (<Thread {...props} {...anythingProps} />)}/>
        <Route exact path='/suggestions' render={(props) => (<Board {...props} {...suggestionsProps} />)}/>
        <Route path='/suggestions/:_id' render={(props) => (<Thread {...props} {...suggestionsProps} />)}/>
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
