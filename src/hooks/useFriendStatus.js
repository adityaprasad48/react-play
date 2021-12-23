import { useDebugValue, useEffect, useState } from 'react';
export function useFriendStatus(friendID) {
	const [isOnline, setIsOnline] = useState(false);

	useEffect(() => {
		if (friendID > 5) {
			setIsOnline(true);
		} else {
			setIsOnline(false);
		}
	}, [friendID]);

	console.log('called', friendID > 5, 'isONline', isOnline);

	// Show a label in DevTools next to this Hook
	// e.g. "FriendStatus: Online"
	useDebugValue(isOnline ? 'Online' : 'Offline');

	// with formatting function
	useDebugValue(isOnline, (isOnline) => isOnline.toString());

	return isOnline;
}
