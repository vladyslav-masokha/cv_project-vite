import FiolLine from '../../ui/FiolLine/FiolLine';
import './ObjectiveInfo.scss';

const ObjectiveInfo = ({ data }) => {
	return (
		<div className='objectiveInfo'>
			<h2>Objective</h2>

			<FiolLine />

			{data ? (
				<p className='objectiveInfoData'>{data.text}</p>
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default ObjectiveInfo;
