import { ReactSession } from 'react-client-session';

// export default function useToken() {
export const getToken = () => {
	return ReactSession.get('token');
};

// 	const [token, setToken] = useState(getToken());
// 	console.log(token);
// 	const saveToken = (userToken) => {
// 		ReactSession.set('token', userToken);
// 		setToken(userToken.token);
// 	};

// 	return {
// 		token,
// 	};
// }
