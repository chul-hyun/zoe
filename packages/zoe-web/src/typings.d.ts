declare let Kakao: {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Auth: {
    login: (options: {
      success: (response: any) => void; //  eslint-disable-line @typescript-eslint/no-explicit-any
      fail: (error: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
    }) => void;
    logout: (callback: () => void) => void;
    getAccessToken: () => string;
  };
  API: {
    request: (options: {
      url: string;
      success: (response: any) => void; //  eslint-disable-line @typescript-eslint/no-explicit-any
      fail: (error: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
    }) => void;
  };
};

declare module '*.png';
