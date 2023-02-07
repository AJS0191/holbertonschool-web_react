import { selectCourse, unselectCourse } from "./courseActionCreators";

describe('selectCourse', () => {
  it('Should return given action', () => {
    expect(selectCourse(1).toEqual({ type: SELECT_COURSE, index: 1 }))
  })
});

describe('unselectCourse', () => {
  it('Should return given action', () => {
    expect(unselectCourse(1).toEqual({ type: UNSELECT_COURSE, index: 1 }))
  })
});
