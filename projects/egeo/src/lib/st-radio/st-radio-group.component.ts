/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import {
   Input,
   EventEmitter,
   Output,
   forwardRef, Directive, ContentChildren, QueryList, Component
} from '@angular/core';

import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RadioChange } from './st-radio.change';
import { StRadioComponent } from './st-radio.component';

export const MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR: any = {
   provide: NG_VALUE_ACCESSOR,
   // tslint:disable-next-line:no-use-before-declare
   useExisting: forwardRef(() => StRadioGroupComponent),
   multi: true
};

let _uniqueIdCounter = 0;

// tslint:disable-next-line:max-classes-per-file
@Component({
   selector: 'st-radio-group',
   providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
   template: '<ng-content></ng-content>',
   host: {
      role: 'radiogroup'
   }
})
export class StRadioGroupComponent implements ControlValueAccessor {

   @Output()
   change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

   @Input()
   qaTag: string;

   @Input()
   get value(): any {
      return this._value;
   }

   set value(newValue: any) {
      if (this._value !== newValue) {
         this._value = newValue;
      }

      this.updatedSelectRadioFromValue();
      this.checkSelectRadio();
   }

   @Input()
   get name(): string {
      return this._name;
   }

   set name(value: string) {
      this._name = value;
      this.updateRadioName();
   }

   @Input()
   get selected(): StRadioComponent {
      return this._selected;
   }
   set selected(selected: StRadioComponent) {
      this._selected = selected;
      this.value = selected ? selected.value : null;
      this.checkSelectRadio();
   }

   @Input()
   get disabled(): boolean { return this._disabled; }
   set disabled(value: boolean) {
      this._disabled = (value != null && value !== false) ? true : null;
   }

   // tslint:disable-next-line:no-use-before-declare
   @ContentChildren(forwardRef(() => StRadioComponent))
   _radios: QueryList<StRadioComponent> = null;

   _value: any = null;
   _selected: StRadioComponent = null;
   _disabled: boolean = false;
   _name: string = `st-radio-group-${_uniqueIdCounter++}`;

   constructor(
   ) { }

   _controlValueAccessorChangeFn: (value: any) => void = (value) => { };

   onTouched: () => any = () => { };

   writeValue(value: any): void {
      this.value = value;
   }

   registerOnChange(fn: (value: any) => void): void {
      this._controlValueAccessorChangeFn = fn;
   }

   registerOnTouched(fn: any): void {
      this.onTouched = fn;
   }

   emitChangeEvent(): void {
      let event = new RadioChange();
      event.source = this._selected;
      event.value = this._value;
      this.change.emit(event);
   }

   checkSelectRadio(): void {
      if (this.selected && !this._selected.checked) {
         this._selected.checked = true;
      }
   }

   touch(): void {
      if (this.onTouched) {
         this.onTouched();
      }
   }

   setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
   }

   private updateRadioName(): void {
      if (this._radios) {
         this._radios.forEach((radio) => {
            radio.name = this.name;
         });
      }
   }

   private updatedSelectRadioFromValue(): void {
      let isAlreadySelected = this._selected != null && this._selected.value === this._value;

      if (this._radios != null && !isAlreadySelected) {
         this._selected = null;
         this._radios.forEach((radio) => {
            radio.checked = this.value === radio.value;
            if (radio.checked) {
               this._selected = radio;
            }
         });
      }
   }
}



/**
 * @description {Component} [Radio]
 *
 * The radio component is used normally in a form acting as the standard html radio input but also user can use it out of a form like a template driven form.
 *
 * @example
 *
 * {html}
 *
 * ```
 * <st-radio-group class ="radio-inline">
 *    <st-radio value="1">Enabled</st-radio>
 *    <st-radio value="2" [disabled]="true">Disabled</st-radio>
 *    <st-radio value="2" [checked]= "true" [disabled]="true">Disabled checked</st-radio>
 * </st-radio-group>
 * ```
 *
 */
