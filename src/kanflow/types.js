// @flow

export type Todo = {
  ID?: number,
  name: string,
  description?: string,
  status_ID: number,
  completed: boolean,
  archived: boolean,
  project_ID?: number,
  archived_timestamp?: ?Date,
  completed_timestamp?: ?Date,
  created_timestamp: Date,
  last_updated_timestamp: Date,
  last_sync_timestamp?: ?Date,
  external_provider_ID?: string,
  external_item_ID?: string
};

export type Project = {
  ID?: number,
  name: string,
  description?: string,
  completed: boolean,
  archived: boolean,
  archived_timestamp?: ?Date,
  completed_timestamp?: ?Date,
  created_timestamp: Date,
  last_updated_timestamp: Date
};

export type Status = {
  ID?: number,
  name: string,
  description?: string,
  archived: boolean,
  archived_timestamp?: ?Date,
  created_timestamp: Date,
  last_updated_timestamp: Date
};

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
