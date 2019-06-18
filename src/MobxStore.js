import {observable} from 'mobx'

export class MemberStore {

  @observable memberObject = []
  @observable taskObject = []
  @observable requestObject

  @observable pressedDate1 = []

  @observable pressedDate2 = []

  @observable flatList = ''



  @observable selectedDay = []
  @observable selectedMember = 'sssss'
  @observable selectedTask = ''
  @observable selectedColor = ''

  @observable vacation = ''
  @observable task = ''
  @observable massage = 'two'
  @observable workout = ''
  @observable study = ''

  @observable toggle = false
  @observable toggle2 = false
  @observable toggle3 = false
  @observable toggle4 = false


}

export const store = new MemberStore();
