const setCookie = (name, token, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (token || "") + expires + "; path=/";
};

const eraseCookie = (name) => {
  document.cookie = name + "=; Max-Age=-99999999;";
};

export const login = async (email, password) => {
  const response = await fetch(
    "https://bb212102-2fab-4fae-9227-3b2b24cf1275.mock.pstmn.io/auth/api/login/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }
  );

  const data = await response.json();
  if (response.ok) {
    //storing the access token in local storage and refresh token in cookie
    localStorage.setItem("accessToken", data.access);
    setCookie("refreshToken", data.refresh, 7);
  }
  return response;
};

export const logout = () => {
  localStorage.removeItem("accessToken");
  eraseCookie("refreshToken");
};
