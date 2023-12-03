export const kakaoOauthLogin = async () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  window.location.href = `${BASE_URL}/auth/kakao`;
};
