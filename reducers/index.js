import { combineReducers } from 'redux';

import me from './me';
import accessToken from './accessToken';

import schema from './schema';

import member from './member';
import members from './members';

import administrator from './administrator';
import administrators from './administrators';

import categories from './categories';
import category from './category';

import offers from './offers';
import offer from './offer';

import comments from './comments';
import comment from './comment';

import ratings from './ratings';
import rating from './rating';

export default combineReducers({
  me,
  accessToken,
  
  schema,

  members,
  member,

  administrators,
  administrator,

  categories,
  category,

  offers,
  offer,

  comments,
  comment,

  ratings,
  rating,
});
