import { Model } from 'objection';
import CustomerOrder from '../CustomerOrder';

export default class AdditionalCharge extends Model {
  static tableName = 'additional_charge';

  static relationMappings = {
    order: {
      relation: Model.BelongsToOneRelation,
      modelClass: CustomerOrder,
      join: {
        from: 'additional_charge.order_id',
        to: 'order.id',
      },
    },
  };
}
