export const useGetUserInfo = () => {
  const { name, userId, userEmail, isAuth } = JSON.parse(
    localStorage.getItem("auth") as string
  ) || { isAuth: false };
  return { name, userId, userEmail, isAuth };
};
