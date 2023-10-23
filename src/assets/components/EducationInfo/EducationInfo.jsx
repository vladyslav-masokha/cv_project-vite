import FiolLine from '../../ui/FiolLine/FiolLine';
import './EducationInfo.scss';

const EducationInfo = ({ data }) => {
	return (
		<div className='educationInfo'>
			<h2>Education</h2>

			<FiolLine />

			{data ? (
				data.map((el, index) => (
					<div className='data' key={index}>
						<span className='personalInfoData'>{el.institution}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default EducationInfo;
