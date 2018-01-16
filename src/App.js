import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Home} />
				<Route path='/contact' component={Contact} />
			</Router>
		)
	}
}
const Home = () => <h1>Hej, tutaj component 'HOME'</h1>
const Contact = () => <h1>A tutaj component 'Contact'</h1>
export default App