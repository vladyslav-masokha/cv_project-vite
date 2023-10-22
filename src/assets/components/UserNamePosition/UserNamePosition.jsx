import './UserNamePosition.scss';

const UserNamePosition = ({ data }) => {
	return (
		<div className='userNamePosition'>
			<h1 className='userName'>{data.fullName}</h1>
			<h3 className='userPosition'>{data.position}</h3>
		</div>
	);
};

export default UserNamePosition;
