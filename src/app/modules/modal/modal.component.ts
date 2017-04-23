import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnDestroy } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'semui-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() onShow: EventEmitter<Boolean> = new EventEmitter();
  @Output() onHide: EventEmitter<Boolean> = new EventEmitter();
  @ViewChild('modal') modal: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  show(data?: {}) {
    jQuery(this.modal.nativeElement).modal('show');
    this.onShow.emit(true);
  }

  hide() {
    jQuery(this.modal.nativeElement).modal('hide');
    this.onHide.emit(true);
  }

  ngOnDestroy() {
    let parent = this.modal.nativeElement.parent;
    parent.removeChild(this.modal);
  }
}
