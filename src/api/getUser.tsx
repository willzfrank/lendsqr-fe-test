// ../api/index.js

const API_ENDPOINT =
  'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users';
export const getUser = async (userId: string | undefined) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/${userId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const user = await response.json();
    return user;
  } catch (error) {
    console.error(error);
  }
};

