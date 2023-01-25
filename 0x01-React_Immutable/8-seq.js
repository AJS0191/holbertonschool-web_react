import Immutable, {Map, is} from 'immutable';
import accessImmutableObject from '2-nested'

function printBestStudents(obj) {
  for (student in obj) {
    let score = accessImmutableObject(obj, 'score');
    let first = accessImmutableObject(obj, 'firstName');
    let last = accessImmutableObject(obj, 'lastName');

    if (score > 70) {
      console.log(`${first[0].toUpperCase() + first.substring(1)} ${last[0].toUpperCase() + last.substring(1)}`)
    }
  }
}

export default printBestStudents;
