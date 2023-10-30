import { useMemo, useState } from 'react';
import AdditionalInfo from './assets/components/AdditionalInfo/AdditionalInfo';
import CertificatesInfo from './assets/components/CertificatesInfo/CertificatesInfo';
import CoursesInfo from './assets/components/CoursesInfo/CoursesInfo';
import EducationInfo from './assets/components/EducationInfo/EducationInfo';
import ObjectiveInfo from './assets/components/ObjectiveInfo/ObjectiveInfo';
import PersonalInfo from './assets/components/PersonalInfo/PersonalInfo';
import ProjectsInfo from './assets/components/ProjectsInfo/ProjectsInfo';
import SkillsInfo from './assets/components/SkillsInfo/SkillsInfo';
import SoftSkillsInfo from './assets/components/SoftSkillsInfo/SoftSkillsInfo';
import UserNamePosition from './assets/components/UserNamePosition/UserNamePosition';
import data from './data.module.json';

const App = () => {

	return (
		<div className='cv'>
			<div className='wrapper'>
				<UserNamePosition data={data} />
				<hr />

				<div className='cvBody'>
					<div className='part1'>
						<PersonalInfo data={data} />
						<ObjectiveInfo data={data} />
						<EducationInfo data={data} />
						<SkillsInfo data={data} />
						<SoftSkillsInfo data={data} />
					</div>
					<div className='part2'>
						<ProjectsInfo data={data} />
						<CoursesInfo data={data} />
						<CertificatesInfo data={data} />
						<AdditionalInfo data={data} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
