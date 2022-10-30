import { URL_REGEX } from '../data/regex.define';
import joi from 'joi';

export default joi.object({
  url: joi.string().regex(URL_REGEX).required(),
});
