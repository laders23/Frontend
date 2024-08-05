export const KAKAO_LINK = `https://kauth.kakao.com/oauth/authorize?client_id=${
	import.meta.env.VITE_KAKAO_CLIENT_ID
}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

export const NAVER_LINK = `https://nid.naver.com/oauth2.0/authorize?client_id=${
	import.meta.env.VITE_NAVER_CLIENT_ID
}&response_type=code&redirect_uri=${
	import.meta.env.VITE_NAVER_REDIRECT_URI
}&state=${import.meta.env.VITE_NAVER_STATE}`;
