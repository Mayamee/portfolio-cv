import { makeAutoObservable } from 'mobx'
import { StackListItem } from 'types/StackListItem'

class TechnologyStackStore {
  private stackList: StackListItem[] = []
  private selectedStackList: StackListItem['content'][] = []

  constructor() {
    makeAutoObservable(this)
  }

  addStackItem(item: string): void {
    this.selectedStackList.push(item)
  }

  removeStackItem(item: string): void {
    this.selectedStackList = this.selectedStackList.filter((stackItem) => stackItem !== item)
  }

  loadStackList(list: StackListItem[]): void {
    if (this.stackList.length > 0) {
      return
    }

    this.stackList = list
  }

  toggleStackItemActive(item: string): void {
    this.stackList = this.stackList.map((stackItem) => {
      if (stackItem.content === item) {
        return {
          ...stackItem,
          isActive: !stackItem.isActive,
        }
      }
      return stackItem
    })
  }

  get stack(): StackListItem[] {
    return this.stackList
  }

  get selectedStack(): StackListItem['content'][] {
    return this.selectedStackList
  }
}

const technologyStackStore = new TechnologyStackStore()

export { technologyStackStore as TechnologyStackStore }
