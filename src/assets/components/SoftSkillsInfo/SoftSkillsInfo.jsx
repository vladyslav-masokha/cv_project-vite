import FiolLine from '../../ui/FiolLine/FiolLine';
import './SoftSkillsInfo.scss';

const SoftSkillsInfo = ({ data }) => {
	return (
		<div className='softSkills'>
			<h2>Soft skills</h2>

			<FiolLine />

			{data.softSkills ? (
				data.softSkills.map((el, index) => (
					<div className='data' key={index}>
						<span className='softSkillData'>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default SoftSkillsInfo;
