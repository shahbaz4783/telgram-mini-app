import Navigation from '@/src/components/navigation';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='min-h-svh justify-start flex items-start flex-col max-w-[480px] border m-auto'>
			<div className='min-h-[85svh]'>{children}</div>
			<Navigation />
		</div>
	);
};

export default layout;
