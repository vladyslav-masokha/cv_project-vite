import { useMemo, useState } from 'react';
import EducationInfo from './assets/components/EducationInfo/EducationInfo';
import ObjectiveInfo from './assets/components/ObjectiveInfo/ObjectiveInfo';
import PersonalInfo from './assets/components/PersonalInfo/PersonalInfo';
import SkillsInfo from './assets/components/SkillsInfo/SkillsInfo';
import UserNamePosition from './assets/components/UserNamePosition/UserNamePosition';
import data from './data.module.json';

const App = () => {
	const [userNamePosition, setUserNamePosition] = useState([]);
	const [personalInfo, setPersonalInfo] = useState([]);
	const [objectiveInfo, setObjectiveInfo] = useState([]);
	const [educationInfo, setEducationInfo] = useState([]);
	const [skillsInfo, setSkillsInfo] = useState([]);

	// console.log(data);

	useMemo(() => {
		setUserNamePosition(data[0]);
		setPersonalInfo(data[1]);
		setObjectiveInfo(data[2]);
		setEducationInfo(data[3]);
		setSkillsInfo(data[4]);
	}, [data]);

	return (
		<div className='cv'>
			<div className='wrapper'>
				<UserNamePosition data={userNamePosition} />
				<hr />
				<PersonalInfo data={personalInfo} />
				<ObjectiveInfo data={objectiveInfo} />
				<EducationInfo data={educationInfo} />
				<SkillsInfo data={skillsInfo} />
			</div>
		</div>
	);
};

export default App;
