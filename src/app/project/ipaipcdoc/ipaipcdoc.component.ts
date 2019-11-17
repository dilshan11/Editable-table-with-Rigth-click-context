

 
 
 import { Component, OnInit,ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-ipaipcdoc',
  templateUrl: './ipaipcdoc.component.html',
  styleUrls: ['./ipaipcdoc.component.scss']
})
export class IpaipcdocComponent implements OnInit {

  @ViewChild(ContextMenuComponent,{static: true}) public basicMenu: ContextMenuComponent;

  editField: string;

    topic=['id','name','age','comapnyname','country','city'];

    content=[[1,'asa',23,'99x',1000000000111111,23232323],[2,'sd',85,'cisco',290000000,676676767]];
  constructor() { }

  ngOnInit() {
  }

  changeValue(id: number, property: string, event: any) {
    console.log('wdsfd');
    this.editField = event.target.textContent;
  }
  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    console.log('updare');
  }
  showMessage(event){
  console.log(event.item.cid);
  this.content[0].splice(event.item.cid,0,'');
  }
}
