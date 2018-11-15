// @flow
export type Task = {
  id: number,
  project_id: number,
  content: string,
  completed: boolean,
  label_ids: Array<number>,
  order: number,
  indent: number,
  priority: number,
  comment_count: number,
  due: { recurring: boolean, string: string, date: string },
  url: string
};
