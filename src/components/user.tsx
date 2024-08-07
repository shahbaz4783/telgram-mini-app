'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface UserData {
	id: number;
	first_name: string;
	username?: string;
	language_code: string;
	is_premium?: boolean;
}

const User = () => {
	const [userData, setUserData] = useState<UserData | null>(null);

	useEffect(() => {
		if (WebApp.initDataUnsafe.user) {
			setUserData(WebApp.initDataUnsafe.user as UserData);
		}
	}, []);

	return (
		<>
			{userData ? (
				<>
					<h1 className='text-2xl font-bold mb-4'>User Data</h1>
					<ul>
						<li>ID: {userData.id}</li>
						<li>First Name: {userData.first_name}</li>
						<li>Username: {userData.username || 'N/A'}</li>
						<li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
					</ul>
				</>
			) : (
				<div>Loading...</div>
			)}
		</>
	);
};

export default User;
