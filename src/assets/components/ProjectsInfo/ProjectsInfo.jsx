import FiolLine from '../../ui/FiolLine/FiolLine';
import './ProjectsInfo.scss';

const ProjectsInfo = ({ data }) => {
	return (
		<div className='projectsInfo'>
			<h2>Projects</h2>
			<FiolLine />

			{data.projectsDescription ? (
				<p className='projectInfoDescription'>
					{data.projectsDescription}
				</p>
			) : null}

			{data.projects ? (
				data.projects.map((el, index) => (
					<div className='data' key={index}>
						<span className='softSkillData'>
							<a href={el.projectSrc} target='_blank'>
								{el.projectName}{' '}
							</a>
							{el.projectDescription}
						</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default ProjectsInfo;
