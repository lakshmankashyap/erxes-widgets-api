import { model, Model } from 'mongoose';
import { fieldSchema, IFieldDocument } from './definitions/fields';

interface IFieldModel extends Model<IFieldDocument> {}

export const loadClass = () => {
  return fieldSchema;
};

// tslint:disable-next-line
const Fields = model<IFieldDocument, IFieldModel>('fields', fieldSchema);

export default Fields;
