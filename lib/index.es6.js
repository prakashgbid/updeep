import constant from './constant';
import freeze from './freeze';
import is from './is';
import _if from './if';
import ifElse from './ifElse';
import map from './map';
import omit from './omit';
import reject from './reject';
import update from './update';
import updateIn from './updateIn';
import withDefault from './withDefault';
import { _ } from './util/curry';

const u = update;

u._ = _;
u.constant = constant;
u.if = _if;
u.ifElse = ifElse;
u.is = is;
u.freeze = freeze;
u.map = map;
u.omit = omit;
u.reject = reject;
u.update = update;
u.updateIn = updateIn;
u.withDefault = withDefault;

export {
  _,
  _if as if,
  constant,
  freeze,
  ifElse,
  is,
  map,
  omit,
  reject,
  update,
  updateIn,
  withDefault,
  u as default,
};