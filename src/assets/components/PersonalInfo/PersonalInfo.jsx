import FiolLine from '../../ui/FiolLine/FiolLine';
import './PersonalInfo.scss';

const PersonalInfo = ({ data }) => {
	return (
		<div className='personalInfo'>
			<h2>Personal information</h2>

			<FiolLine />

			{data.contactInformation ? (
				data.contactInformation.map((el, index) => (
					<div className='data' key={index}>
						<span dangerouslySetInnerHTML={{ __html: el.icon }} />
						<span className='personalInfoData'>
							{el.source}:{' '}
							<a href={el.data} target='_blank'>
								{el.value}
							</a>
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
