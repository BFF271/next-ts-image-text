import React from 'react';
import Text from '../components/text';
import Image from '../components/image';

export default function Home() {
	return (
		<>
			<div className="grid grid-cols-2 w-[1024px] bg-green-300 mx-auto p-10">
				<Image />
				<Text />
			</div>
		</>
	);
}
