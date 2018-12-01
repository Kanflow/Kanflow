// @flow
export type Provider = {
  ID?: number,
  name: string,
  created_timestamp: Date,
  API_secret: string,
  API_key: string
};

export type User = {
  ID?: number,
  name: string,
  email: string,
  verified: boolean,
  password: string
};
