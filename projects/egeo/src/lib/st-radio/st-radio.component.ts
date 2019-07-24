import { Component, OnInit, Input, Output, EventEmitter, Optional } from '@angular/core';
import { RadioChange } from './st-radio.change';
import { SelectOneDispatcher } from '../utils/unique-dispatcher';
import { StRadioGroupComponent } from './st-radio-group.component';


let idUnique: number = 0;

@Component({
   selector: 'st-radio',
   templateUrl: './st-radio.component.html',
   styleUrls: ['./st-radio.component.scss'],
   host: {
      '[class.sth-radio-checked]': 'checked',
      '[attr.id]': 'id'
   }
})
export class StRadioComponent implements OnInit {

   radioGroup: any;
   /** @Input {string} [id='st-radio-<unique id>'] Input Id value */
   @Input() id: string = `st-radio-${idUnique++}`;
   /** @Input {string} [qaTag='st-radio-<unique id>'] Id value for qa test */
   @Input() qaTag: string = `st-radio-${idUnique++}`;
   /** @Input {string} [name=''] Input name value */
   @Input() name: string;
   /** @Input {boolean} [checked=''] Boolean to check the radio button */
   @Input()
   get checked(): boolean {
      return this._checked;
   }

   set checked(newCheckedState: boolean) {

      if (this._checked !== newCheckedState) {
         this._checked = newCheckedState;
      }

      if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
         this.radioGroup.selected = this;
      } else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
         this.radioGroup.selected = null;
      }

      if (newCheckedState) {
         this._radioDispatcher.notify(this.id, this.name);
      }
   }
   /** @Input {boolean} [disabled=''] Boolean to disable the radio button */
   @Input()
   get disabled(): boolean {
      return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
   }

   set disabled(value: boolean) {
      this._disabled = (value != null && value !== false) ? true : null;
   }
   /** @Input {boolean} [value=''] Value of the radio button */
   @Input()
   get value(): any {
      return this._value;
   }

   set value(value: any) {
      if (this._value !== value) {
         this._value = value;

         if (this.radioGroup != null) {
            if (!this.checked) {
               this.checked = this.radioGroup.value === value;
            } else {
               this.radioGroup.selected = null;
            }
         }
      }
   }

   /** @Output {boolean} [change=''] Boolean emitted when radio button is changed */
   @Output() change: EventEmitter<RadioChange> = new EventEmitter<RadioChange>();

   get inputId(): string {
      return `${this.id}-input`;
   }

   _value: any = null;
   _checked: boolean;
   _disabled: boolean;

   constructor(
      @Optional() radioGroup: StRadioGroupComponent,
      private _radioDispatcher: SelectOneDispatcher
   ) {

      this.radioGroup = radioGroup;
      _radioDispatcher.listen((id: string, name: string) => {
         if (id !== this.id && name === this.name) {
            this.checked = false;
         }
      });
   }

   ngOnInit(): void {
      if (this.radioGroup && this.radioGroup.value) {
         this.checked = this.radioGroup.value === this._value;
      }

      if (this.radioGroup) {
         this.name = this.radioGroup.name;
      }
   }

   onInputBlur(): void {
      if (this.radioGroup) {
         this.radioGroup.touch();
      }
   }

   onInputClick(event: Event): void {
      event.stopPropagation();
   }

   toggleRadio(event: Event): void {
      event.stopPropagation();
      let groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;

      if (!this.disabled) {
         this.checked = !this.checked;
         this.emitChangeEvent();
      }

      if (this.radioGroup) {
         this.radioGroup._controlValueAccessorChangeFn(this.value);

         if (groupValueChanged) {
            this.radioGroup.emitChangeEvent();
         }
      }
   }

   private emitChangeEvent(): void {
      let event = new RadioChange();
      event.source = this;
      event.value = this._value;
      this.change.emit(event);
   }
}
