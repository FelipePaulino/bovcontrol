import Realm from 'realm';

import Checklist from '../schemas/Checklist';

export const getRealm = async () => {
  await Realm.open({
    schema: [Checklist],
  });
}