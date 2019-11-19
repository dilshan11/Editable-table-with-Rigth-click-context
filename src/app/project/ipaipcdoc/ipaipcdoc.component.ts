

 
 
 import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';

@Component({
  selector: 'app-ipaipcdoc',
  templateUrl: './ipaipcdoc.component.html',
  styleUrls: ['./ipaipcdoc.component.scss']
})
export class IpaipcdocComponent implements OnInit {

  check;
  commentText;

  @ViewChild(ContextMenuComponent,{static: true}) public basicMenu: ContextMenuComponent;
  @ViewChild('com',{static:true}) public comment: ElementRef;

  editField: string;

    topic=['id','name','age','comapnyname','country','city'];

    content=[[1,'asa',23,'99x',1000000000111111,23232323],[2,'sd',85,'cisco',290000000,676676767]];

    content2=[[{name:1,comment:'we are sri lankan',colur:''},{name:'asa',comment:'',colur:'red'},{name:34,comment:'',colur:''},{name:'99x',comment:'',colur:''},{name:100000000111122,comment:'',colur:''},{name:3434,comment:'',colur:''}],
          [{name:2,comment:'indian',colur:''},{name:'sd',comment:'',colur:'blue'},{name:85,comment:'',colur:''},{name:'cisco',comment:'',colur:''},{name:29000000000,comment:'',colur:''},{name:6778,comment:'',colur:''}]
        ];

    
    
  constructor() { }

  ngOnInit() {
  }

  changeValue(cid,rid,c,event,ass) {
    // console.log(cid);
    // console.log(rid);
    // console.log(c);
    console.log(ass.innerText);
    // console.log(event);
    // this.content2[rid][cid].name=c.name;
    //console.log(this.content2[rid][cid].name);
  }
  updateList(id: number, property: string, event: any) {
    // const editField = event.target.textContent;
    // console.log('updare');
  }
  addcolumn(event){
    let ab:any={name:'',comment:''};
    let l=this.content.length;
    this.topic.splice(event.item.cid,0,'');
   for(let i=0;i<l;i++){
     this.content2[i].splice(event.item.cid,0,ab);
   }
  }

  addcomment(event){
    console.log(event);
  }

  over(a,b,c,event,com){
     this.check=event.clientX;
    com.style.display="block";
   console.log(this.content2[b][a].comment);
   if(this.content2[b][a].comment!=''){
   this.comment.nativeElement.style.left=event.clientX.toString()+"px";
   this.comment.nativeElement.style.top=event.clientY.toString()+"px";
    this.commentText=this.content2[b][a].comment;
   }else{
     this.comment.nativeElement.style.display="none";
   }
}

  offtheOverlay(){
    this.comment.nativeElement.style.display="none";
  }
  changeColur(){
    console.log('change colur');
  }
  
}
