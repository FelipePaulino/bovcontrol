export const Checklist = {
  name: 'Checklist',
  primaryKey: '_id',
  properties: {
    _id: 'int',
    type: 'string',
    amount_of_milk_produced: 'int',
    farmer: {
      name: 'string',
      city: 'string',
    },
    from: {
      name: 'string',
    },
    to: {
      name: 'string',
    },
    number_of_cows_head: 'int',
    had_supervision: 'bool',
    location: {
      latitude: 'int',
      longitude: 'int',
    },
    created_at: 'string',
    updated_at: 'string'
  },
};
