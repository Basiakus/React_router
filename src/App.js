import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';


class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Navigation}>
					<IndexRoute component={Home} />
					<Route path='/contact' component={Contact} />
					<Route path='/hello/:name' component={Hello} />
					<Route path='*' component={PageNotFound} />
				</Route>
			</Router>
		)
	}
}
const Home = () => <h1>Hej, tutaj component 'HOME'</h1>
const Contact = () => <h1>A tutaj component 'Contact'</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>;
const Navigation = props => (
    <div>
       <ul>
            <li><Link activeStyle={{color: '#48abee'}} onlyActiveOnIndex to="/">Home</Link></li>
            <li><Link activeStyle={{color: '#48abee'}} onlyActiveOnIndex to="/contact">Contact</Link></li>
        </ul>
        {props.children}
    </div>
);
export default App