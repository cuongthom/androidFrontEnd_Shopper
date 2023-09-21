export type ITimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type IConnectionState = {
  userProfile: any;
  jwtToken: string | null;
  location: ILocation | any;
  email: string;
  characterSelected: string | null;
};

export type ILocation = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
