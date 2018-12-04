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
  created_timestamp: ?Date,
  last_updated_timestamp: ?Date,
  last_sync_timestamp?: ?Date,
  external_provider_ID?: string,
  external_item_ID?: string
};
