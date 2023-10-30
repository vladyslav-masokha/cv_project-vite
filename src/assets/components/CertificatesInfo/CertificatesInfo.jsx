import FiolLine from '../../ui/FiolLine/FiolLine';

const CertificatesInfo = ({ data }) => {
	return (
		<div className='certificatesInfo'>
			<h2>Certificates</h2>

			<FiolLine />

			{data.certificatesUrl ? (
				data.certificatesUrl.map((el, index) => (
					<div className='data' key={index}>
						<a href={el} className='personalInfoData'>
							{el}
						</a>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default CertificatesInfo;
