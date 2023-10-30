import FiolLine from '../../ui/FiolLine/FiolLine';

const AdditionalInfo = ({ data }) => {
	return (
		<div className='additionalInfo'>
			<h2>Additional information</h2>

			<FiolLine />

			{data.additionalInfo ? (
				data.additionalInfo.map((el, index) => (
					<div className='data' key={index}>
						<span className='info'>{el}</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default AdditionalInfo;
