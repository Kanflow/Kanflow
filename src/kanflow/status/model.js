// @flow

export type Status = {
  ID?: number,
  name: string,
  description?: string,
  lower_WIP_limit?: number,
  upper_WIP_limit?: number,
  next_status_ID: number,
  previous_status_ID: number,
  archived: boolean,
  archived_timestamp?: ?Date,
  created_timestamp: Date,
  last_updated_timestamp: Date
};
