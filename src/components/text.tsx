import React, { useState, useEffect } from 'react';

const textColorOptions = [
	'text-grey-100',
	'text-grey-200',
	'text-grey-300',
	'text-grey-400',
	'text-grey-500',
	'text-grey-600',
	'text-grey-700',
	'text-grey-800',
	'text-grey-900',
];

export default function Text() {
	const [fontSize, setFontSize] = useState<number>(20);
	const [textColor, setTextColor] = useState<string>('text-white');
	const [boldText, setBoldText] = useState('BOLDED TEXT');
	const [normalText, setNormalText] = useState(
		'Some text of random, normal weight text'
	);
	const [isBold, setIsBold] = useState(true);
	const [isOpenColorDropDown, setIsOpenColorDropDown] = useState(false);

	const handleIsOpenColorDropDown = () => {
		setIsOpenColorDropDown(!isOpenColorDropDown);
	};

	const handleChangeTextColor = (color: string) => {
		setIsOpenColorDropDown(!isOpenColorDropDown);
		setTextColor(`${color}`);
	};

	useEffect(() => {
		document.getElementById('boldText').style.fontWeight = isBold
			? 'bold'
			: 'normal';
	}, [isBold]);

	useEffect(() => {
		document.getElementById('boldText').style.fontSize = `${fontSize}px`;
	}, [fontSize]);

	return (
		<div className="pl-10 text-white">
			<div className="flex mb-5">
				<button
					className="hover:bg-green-200 border-none outline-none"
					onClick={() => setFontSize(fontSize - 1)}
				>
					<img src="/minus.svg" alt="Minus Icon" />
				</button>
				{/* Font size input */}
				<input
					value={fontSize}
					className="w-6 bg-transparent outline-none text-center text-black text-lg"
					onChange={(e) => setFontSize(parseFloat(e.target.value))}
				/>
				{/* Increase font size button */}
				<button
					className="hover:bg-green-200 border-none outline-none"
					onClick={() => setFontSize(fontSize + 1)}
				>
					<img src="/plus.svg" alt="Plus Icon" />
				</button>
				{/* Toggle bold text */}
				<button
					className="hover:bg-green-200 border-none outline-none mx-3"
					onClick={() => setIsBold(!isBold)}
				>
					<img src="/bold.svg" alt="Bold Icon" />
				</button>
				<div className="h-6">
					<button
						id="dropdownDefaultButton"
						data-dropdown-toggle="dropdown"
						className="bg-[url('/pencil.svg')] w-6 h-6 hover:bg-green-200 border-none outline-none"
						type="button"
						onClick={handleIsOpenColorDropDown}
					></button>
					{isOpenColorDropDown && (
						<div
							id="dropdown"
							className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700"
						>
							<ul
								className="py-2 text-sm text-gray-700 dark:text-gray-200"
								aria-labelledby="dropdownDefaultButton"
							>
								{textColorOptions.map((color) => (
									<li
										key={color}
										className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${color}`}
										onClick={() => handleChangeTextColor(color)}
									>
										{color}
									</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>

			{/* Bold text */}
			<p
				id="boldText"
				contentEditable
				dangerouslySetInnerHTML={{ __html: boldText }}
				onInput={(e) => setBoldText(e.currentTarget.innerHTML)}
				className={`text-[${fontSize}px] font-bold mb-5 outline-white rounded outline-offset-4 hover:outline-dashed hover:outline-1 hover:outline-offset-0 hover:outline-blue-700`}
			/>

			{/* Normal text */}
			<p
				id="normalText"
				contentEditable
				dangerouslySetInnerHTML={{ __html: normalText }}
				onInput={(e) => setNormalText(e.currentTarget.innerHTML)}
				className={`text-[16px] ${textColor} font-normal outline-white rounded outline-offset-4 hover:rounded-none hover:outline-dashed hover:outline-1 hover:outline-offset-0 hover:outline-blue-700`}
			/>
		</div>
	);
}
