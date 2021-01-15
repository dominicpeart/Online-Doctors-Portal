import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import doctors from './Data/doctors';
import Appointment from './Pages/Appointment';
import Home from './Pages/Home';
import Reviews from './Pages/Reviews';
export const DataContext = createContext();
export const CalenderContext = createContext();

function App() {
	const [ allAppointments, setAllAppointments ] = useState([]);
	const [ allBookedAppointments, setAllBookedAppointments ] = useState([]);
	const [ allPatients, setAllPatients ] = useState([]);
	const [ date, setDate ] = useState(new Date());
	const [ preLoaderVisibility, setPreLoaderVisibility ] = useState(true);

	useEffect(
		() => {
			setAllAppointments(doctors);
			setPreLoaderVisibility(false);
		},
		[ allAppointments.length ]
	);

	const contextData = {
		allAppointments,
		setAllAppointments,
		allBookedAppointments,
		setAllBookedAppointments,
		allPatients,
		preLoaderVisibility
	};
	const calenderContextValue = { date, setDate };

	return (
		<DataContext.Provider value={contextData}>
			<CalenderContext.Provider value={calenderContextValue}>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/appointment">
							<Appointment />
						</Route>
						<Route path="/reviews">
							<Reviews />
						</Route>
					</Switch>
				</Router>
			</CalenderContext.Provider>
		</DataContext.Provider>
	);
}

export default App;
