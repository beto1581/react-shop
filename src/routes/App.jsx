import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import RecoveryPassword from '../components/RecoveryPassword';
import Login from '../components/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Layout>
					<Route exact path='/' component={Home}/>
					<Route exact path='/login' component={Login}/>
					<Route exact path='/recovery-password' component={RecoveryPassword}/>
					<Route component={NotFound}/>
				</Layout>
			</Routes>
		</BrowserRouter>
		 
	);
}

export default App;