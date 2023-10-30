import FiolLine from '../../ui/FiolLine/FiolLine';

const SkillsInfo = ({ data }) => {
	return (
		<div className='skillsInfo'>
			<h2>Skills</h2>

			<FiolLine />

			{data ? (
				data.skills.map((el, index) => (
					<div className='data' key={index}>
						<span className='skillsInfoData'>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default SkillsInfo;
