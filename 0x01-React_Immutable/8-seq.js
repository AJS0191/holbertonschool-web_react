import Immutable, {Seq} from 'immutable';


function printBestStudents(obj) {
  Seq(obj)
  .filter(x => x.score > 70)
  .map(x => console.log(`${x.firstName[0] + x.firstName.substring(1)} ${x.lastName[0] + x.lastName.substring(1)}`))
}

export default printBestStudents;
