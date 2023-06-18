import { useRef, useState } from 'react';

const FaqsCard = (props) => {
	const answerElRef = useRef();
	const [state, setState] = useState(false);
	const [answerH, setAnswerH] = useState('0px');
	const { faqsList, idx } = props;

	const handleOpenAnswer = () => {
		const answerElH = answerElRef.current.childNodes[0].offsetHeight;
		setState(!state);
		setAnswerH(`${answerElH + 20}px`);
	};

	return (
		<div
			className="mt-5 space-y-3 overflow-hidden border-b bg-black px-4 py-1"
			key={idx}
			onClick={handleOpenAnswer}>
			<h4 className="flex cursor-pointer items-center justify-between pb-5 text-lg font-medium text-gray-50">
				{faqsList.q}
				{state ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 h-5 w-5 text-gray-50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M20 12H4"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="ml-2 h-5 w-5 text-gray-50"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 4v16m8-8H4"
						/>
					</svg>
				)}
			</h4>
			<div
				ref={answerElRef}
				className="duration-300"
				style={state ? { height: answerH } : { height: '0px' }}>
				<div>
					<p className="text-gray-50">{faqsList.a}</p>
				</div>
			</div>
		</div>
	);
};

export default FaqsCard;
