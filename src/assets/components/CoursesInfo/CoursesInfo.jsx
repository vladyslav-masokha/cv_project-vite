import FiolLine from '../../ui/FiolLine/FiolLine';
import './CoursesInfo.scss';

const CoursesInfo = ({ data }) => {
	return (
		<div className='coursesInfo'>
			<h2>Courses</h2>

			<FiolLine />

			{data.courses ? (
				data.courses.map((el, index) => (
					<div className='data' key={index}>
						<span className='personalInfoData'>
							{el.year}, {el.data}
						</span>
					</div>
				))
			) : (
				<span>Data is not defined!</span>
			)}
		</div>
	);
};

export default CoursesInfo;
