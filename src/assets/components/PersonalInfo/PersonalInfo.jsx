import FiolLine from '../../ui/FiolLine/FiolLine';
import './PersonalInfo.scss';

const PersonalInfo = ({ data }) => {
	return (
		<div className='personalInfo'>
			<h2 className='personalInfoText'>Personal information: </h2>

			<FiolLine />

			{data.map((el, index) => (
				<div className='data' key={index}>
					<span dangerouslySetInnerHTML={{ __html: el.source }} />
					<span className='personalInfoData'>
						{el.text}: <a href={el.data}>{el.value}</a>
					</span>
				</div>
			))}
		</div>
	);
};

export default PersonalInfo;
