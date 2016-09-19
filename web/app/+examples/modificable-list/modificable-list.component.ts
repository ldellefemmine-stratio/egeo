import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { StModificableListElement, StListModifierObject } from '../../../../components';

@Component({
  selector: 'modificable-list-example',
  template: require('./modificable-list.component.html'),
  styles: [require('./modificable-list.component.scss')],
  encapsulation: ViewEncapsulation.None
})

export class ModificableListComponent implements OnInit {

  completeUserList: Array<StModificableListElement> = new Array<StModificableListElement>();
  selectedUserList: Array<StModificableListElement> = new Array<StModificableListElement>();
  filteredCompleteUserList: Array<StModificableListElement> = new Array<StModificableListElement>();
  filteredSelectedUserList: Array<StModificableListElement> = new Array<StModificableListElement>();

  constructor() {
    for (let i = 0; i < 30; i++) {
      let user = {
        id: i.toString(),
        name: 'User ' + i
      };
      this.completeUserList.push(user);
      if (i % 4 === 0) this.selectedUserList.push(user);
    }
  }

  ngOnInit(): void {
    if (this.selectedUserList) this.completeUserList = this.crossLists(this.completeUserList, this.selectedUserList);
    this.searchInCompleteUserList('');
    this.searchInSelectedUserList('');
  }

  modifyUserList(modifier: StListModifierObject): void {
    if (modifier.actionToAdd) {
      this.completeUserList = this.crossLists(this.completeUserList, modifier.list);
      modifier.list.map((row) => {
        this.selectedUserList.push(row);
      });
    } else {
      this.selectedUserList = this.crossLists(this.selectedUserList, modifier.list);
      modifier.list.map((row) => {
        this.completeUserList.push(row);
      });
    }
    this.searchInCompleteUserList('');
    this.searchInSelectedUserList('');
  }

  crossLists(completeList: Array<StModificableListElement>, selectedList: Array<StModificableListElement>): Array<StModificableListElement> {
    return completeList.filter((row) => selectedList.filter((row2) => row.id.toString() === row2.id.toString()).length === 0);
  }

  searchInCompleteUserList(text: string): void {
    this.filteredCompleteUserList = this.completeUserList.filter((row) => this.searchHelper(row.name, text));
  }

  searchInSelectedUserList(text: string): void {
    this.filteredSelectedUserList = this.selectedUserList.filter((row) => this.searchHelper(row.name, text));
  }

  private searchHelper(field1: string, field2: string): boolean {
    field1 = (field1 !== undefined) ? field1.toLowerCase() : '';
    field2 = (field2 !== undefined) ? field2.toLowerCase() : '';
    return field1.includes(field2);
  }
}
