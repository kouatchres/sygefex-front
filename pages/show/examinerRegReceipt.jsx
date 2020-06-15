import ExaminerRegistrationReceipt from '../../src/components/CESExaminer/ExaminerRegistrationReceipt';

const Candidate = ({ query }) => {
	return (

		<div>
			<ExaminerRegistrationReceipt id={query.id} />
		</div>
	);
};
export default Candidate;
