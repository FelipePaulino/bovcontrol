import Realm from 'realm';

import Checklist from '../schemas/Checklist';

export default function getRealm() {
  return Realm.open({
    schema: [Checklist],
  });
}