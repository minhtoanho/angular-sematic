import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'semui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('modal') modal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  show(data?: {}) {
    jQuery(this.modal.nativeElement).modal('toggle');
  }

  hide() {
    jQuery(this.modal.nativeElement).modal('hide');
  }

  ngOnDestroy() {
    let parent = this.modal.nativeElement.parent;
    parent.removeChild(this.modal);
  }
}
