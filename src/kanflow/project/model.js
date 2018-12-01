// @flow
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
