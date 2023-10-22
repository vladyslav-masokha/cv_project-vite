import { useMemo, useState } from 'react';
import PersonalInfo from './assets/components/PersonalInfo/PersonalInfo';
import UserNamePosition from './assets/components/UserNamePosition/UserNamePosition';
import data from './data.module.json';

const App = () => {
	const [userNamePosition, setUserNamePosition] = useState([]);
	const [personalInfo, setPersonalInfo] = useState([]);

	useMemo(() => {
		setUserNamePosition(data[0]);
		setPersonalInfo(data[1]);
	}, [data]);

	return (
		<div className='cv'>
			<div className='wrapper'>
				<UserNamePosition data={userNamePosition} />
				<hr />
				<PersonalInfo data={personalInfo} />
			</div>
		</div>
	);
};

export default App;
