import { combineReducers } from 'redux';

import app from './app';
import modal from './modal';
import loading from './loading';

import me from './me';
import accessToken from './accessToken';

import schema from './schema';

import member from './member';
import members from './members';

import creditCard from './creditCard';
import creditCards from './creditCards';

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

import favorites from './favorites';
import packs from './packs';

import options from './options';
import articles from './articles';
import article from './article';

export default combineReducers({
  modal,
  app,
  loading,

  me,
  accessToken,

  schema,

  members,
  member,

  creditCard,
  creditCards,

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

  favorites,
  packs,

  options,
  articles,
  article,
});
