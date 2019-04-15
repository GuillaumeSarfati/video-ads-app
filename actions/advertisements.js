import {
  createAction,
  createApiAction,
  generateApiAction
} from '../api';

export const FIND = generateApiAction('ADVERTISEMENTS_FIND');
export const CREATE = generateApiAction('ADVERTISEMENTS_CREATE');
export const UPSERT = generateApiAction('ADVERTISEMENTS_UPSERT');
export const DELETE = generateApiAction('ADVERTISEMENTS_DELETE');

export const find = createApiAction(FIND);
export const create = createApiAction(CREATE);
export const upsert = createApiAction(UPSERT);
export const deleteById = createApiAction(DELETE);

export default {
  find,
  create,
  upsert,
  deleteById,
};
