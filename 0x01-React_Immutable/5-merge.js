import Immutable, {Map, List} from 'immutable';

function concatElements(page1, page2){
return List.concat(page1, page2)
}

function mergeElements(page1, page2){
  return Map.mergeWith(page1, page2)
}

export {mergeElements, concatElements};
