import FiolLine from '../../ui/FiolLine/FiolLine';
import './PersonalInfo.scss';

const PersonalInfo = ({ data }) => {
	return (
		<div className='personalInfo'>
			<h2>Personal information</h2>

			<FiolLine />

			{data ? (
				data.map((el, index) => (
					<div className='data' key={index}>
						<span dangerouslySetInnerHTML={{ __html: el.source }} />
						<span className='personalInfoData'>
							{el.text}: <a href={el.data}>{el.value}</a>
						</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default PersonalInfo;
