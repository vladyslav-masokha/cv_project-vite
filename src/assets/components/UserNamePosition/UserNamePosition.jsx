import './UserNamePosition.scss';

const UserNamePosition = ({ data }) => {
	return (
		<div className='userNamePosition'>
			{data ? (
				<>
					<h1 className='userName'>{data.fullName}</h1>
					<h3 className='userPosition'>{data.position}</h3>
				</>
			) : (
				<h1 className='userName'>Data is not defined!</h1>
			)}
		</div>
	);
};

export default UserNamePosition;
