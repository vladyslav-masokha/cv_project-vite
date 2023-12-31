import FiolLine from '../../ui/FiolLine/FiolLine';

const EducationInfo = ({ data }) => {
	return (
		<div className='educationInfo'>
			<h2>Education</h2>

			<FiolLine />

			{data.education ? (
				data.education.map((el, index) => (
					<div className='data' key={index}>
						<span className='personalInfoData'>
							{el.institution}, {el.duration}
						</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default EducationInfo;
