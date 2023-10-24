import { useMemo, useState } from 'react';
import EducationInfo from './assets/components/EducationInfo/EducationInfo';
import ObjectiveInfo from './assets/components/ObjectiveInfo/ObjectiveInfo';
import PersonalInfo from './assets/components/PersonalInfo/PersonalInfo';
import ProjectsInfo from './assets/components/ProjectsInfo/ProjectsInfo';
import SkillsInfo from './assets/components/SkillsInfo/SkillsInfo';
import SoftSkillsInfo from './assets/components/SoftSkillsInfo/SoftSkillsInfo';
import UserNamePosition from './assets/components/UserNamePosition/UserNamePosition';
import data from './data.module.json';

const App = () => {
	const [userNamePosition, setUserNamePosition] = useState([]);
	const [personalInfo, setPersonalInfo] = useState([]);
	const [objectiveInfo, setObjectiveInfo] = useState([]);
	const [educationInfo, setEducationInfo] = useState([]);
	const [skillsInfo, setSkillsInfo] = useState([]);
	const [softSkillsInfo, setSoftSkillsInfo] = useState([]);
	const [projectsInfo, setProjectsInfo] = useState([]);

	useMemo(() => {
		setUserNamePosition(data);
		setPersonalInfo(data);
		setObjectiveInfo(data);
		setEducationInfo(data);
		setSkillsInfo(data);
		setSoftSkillsInfo(data);
		setProjectsInfo(data);
	}, [data]);

	return (
		<div className='cv'>
			<div className='wrapper'>
				<UserNamePosition data={userNamePosition} />
				<hr />

				<div className='cvBody'>
					<div className='part1'>
						<PersonalInfo data={personalInfo} />
						<ObjectiveInfo data={objectiveInfo} />
						<EducationInfo data={educationInfo} />
						<SkillsInfo data={skillsInfo} />
						<SoftSkillsInfo data={softSkillsInfo} />
					</div>
					<div className='part2'>
						<ProjectsInfo data={projectsInfo} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
