import * as React from 'react';
import styles from './FirstWebPart.module.scss';
import { DocumentCard, Panel, PanelType } from '@fluentui/react'


import { escape } from '@microsoft/sp-lodash-subset';
import { FirstWebState } from './FirstWebState';
import { spoperations } from '../../../Services/Services';
import { ComboBox, Dropdown, PrimaryButton, TextField, Toggle } from 'office-ui-fabric-react';
import { WebPartContext } from '@microsoft/sp-webpart-base';


var  type:""
       var  discipline:""
       var  target:""
       var  relprod:""
       var  ip:""
       var  date:""
       var  practice:""
       var  sponsor:""

var x = 1
      //  var sponsor:[0]
      //  var  type:"Product 1"
      //  var  discipline:1
      //  var  target:""
      //  var  relprod:""
      //  var  ip:""
      //  var  date:""
      //  var  practice:""
export interface Props {
p:any,
context:WebPartContext,
flagButton:boolean,
}
export interface State{
  p:{
    id:number,
    draft:number,
        namee:any,
        type:any,
        discipline:any,
        sponsor:any,
        desc:any,
        scope:any,
        target:any,
        relprod:any,
        milli:any,
        ip:any,
        date:any,
        practice:any,
  },
  options:[{key:any, text:any},{key:any, text:any},{key:any, text:any}
  ],
  nameerror: string,
  typeerror: string,
  disciplineerror: string,
  sponsorerror:string,
  descerror: string,
  scopeerror: string,

}
export default class Form extends React.Component<Props,State, {}> {

  private spo : spoperations;
  constructor(props:Props)
  {
    super(props);
    this.state={
      options: [
        {key:'1', text:'Product 1'},
        {key:'2', text:'Product 2'},
        {key:'3', text:'Product 3'},
      ],

      p:{
        draft:0,
        id:this.props.p.Id,
        namee:this.props.p.Product_x0020_Name,
        type:this.props.p.Product_x0020_Type,
        discipline:this.props.p.Discipline,
        sponsor:this.props.p.Product_x0020_Sponsor,
        desc:this.props.p.Product_x0020_Descirption,
        scope:this.props.p.Product_x0020_Scope,
        target:this.props.p.Target_x0020_Market,
        relprod:this.props.p.Related_x0020_Products,
        milli:this.props.p.Does_x0020_Product_x0020_overlap,
        ip:this.props.p.Ip_x0020_Source,
        date:this.props.p.Product_x0020_Finish_x0020_Date,
        practice:this.props.p.Other_x0020_Practices_x0020_Invo,

      },
      nameerror:"" ,
  typeerror: "",
  disciplineerror: "",
  sponsorerror:"",
  descerror: "",
  scopeerror: "",
  }
    this.spo  = new spoperations();


  }
  public submit()
  {
    if(this.validate()){

      this.spo.createListItem(this.state.p, this.props.context)
    }
    else{
      this.validate()
    }

  }
  public Name(e:any)
  {
   this.state.p.namee =e.target.value;

  }
  public Description(e:any)
  {
   this.state.p.desc = e.target.value;

  }
  public Scope(e:any)
  {
   this.state.p.scope = e.target.value;

  }

  public milli(e:any, b:any)
  {
    this.state.p.milli = b
    console.log(this.state.p)
  }

  public Type(e:any, sel:any)
  {
    this.state.p.type = sel.text
    console.log(this.state.p)
  }
  public target(e:any, sel:any)
  {
    this.state.p.target = sel.text
    console.log(this.state.p)
  }
  public discipline(e:any, sel:any)
  {
    this.state.p.discipline = sel.text
    console.log(this.state.p)
  }
  public practice(e:any, sel:any)
  {
    this.state.p.practice = sel.text
    console.log(this.state.p)
  }
  public relprod(e:any, sel:any)
  {
    this.state.p.relprod = sel.text
    console.log(this.state.p)
  }
  public date(e:any)
  {
     var p = this.state.p;
    p.date = e.target.value;



  }

  public ip(e:any, sel:any)
  {
    this.state.p.ip = sel.text
    console.log(this.state.p)
  }

  public sponsor(e:any,sel:any)
  {
    this.state.p.sponsor = sel.text
    console.log(this.state.p)


  //    console.log([e.target.lang])
  //    var flag = true
  //    var p = this.state.p;
  //     if(sel.selected){
  //    for(var i=0;i<p.sponsor.length;i++)
  //    {
  //         if(sel.text==p.sponsor[i])
  //         {flag=false;break;}
  //    }
  //    if(flag)
  //    p.sponsor.push(sel.text)
  //  }
  //  else{
  //    for(var i=0;i<p.sponsor.length;i++)
  //    {
  //         if(sel.text==p.sponsor[i])
  //         {p.sponsor.splice(i,1)}
  //    }

  //  }





  }


  public updateitem()
  {
    if(this.validate()){

      this.spo.edit(this.state.p, this.props.context)
    }
    else{
      this.validate()
    }
    }


   public validate(){
     var flag=true
      if(this.state.p.namee==""  || this.state.p.namee==null)
      {
        console.log(this.state.p)
        this.setState({
          nameerror:"Name cannot be left as blank"
        })
        flag=false;
      }
      else{
        this.setState({
          nameerror:"",
        })
      }
      if(this.state.p.type==""  || this.state.p.type==null)
      {
        this.setState({
          typeerror:"Type cannot be left as blank"
        })
        flag=false;
      }
      else{
        this.setState({
          typeerror:"",
        })
      }
      if(this.state.p.desc==""  || this.state.p.desc==null)
      {
        this.setState({
          descerror:"Description cannot be left as blank"
        })
        flag=false;
      }
      else{
        this.setState({
          descerror:"",
        })
      }
      if(this.state.p.sponsor==""  || this.state.p.sponsor==null)
      {
        this.setState({
          sponsorerror:"sponsor cannot be left as blank"
        })
        flag=false;
      }else{
        this.setState({
          sponsorerror:"",
        })
      }
      if(this.state.p.discipline==""  || this.state.p.discipline==null)
      {
        this.setState({
          disciplineerror:"discipline cannot be left as blank"
        })
        flag=false;
      }else{
        this.setState({
          disciplineerror:"",
        })
      }
      if(this.state.p.scope==""  || this.state.p.scope==null)
      {
        this.setState({
          scopeerror:"scope cannot be left as blank"
        })
        flag=false;
      }else{
        this.setState({
          scopeerror:"",
        })
      }

  return flag


    }







  public render(): React.ReactElement<Props>
  {
    // console.log(this.state.p.date.substring(0,10));




    if(this.state.p.date!=undefined)
    {
      this.state.p.date = this.state.p.date.substring(0,10)

    }

    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.type)
      {
          type=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.discipline)
      {
          discipline=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.target)
      {
          target=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.relprod)
      {
          relprod=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.ip)
      {
          ip=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.practice)
      {
          practice=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.type)
      {
          type=data.key
          console.log(data.key)

      }
    })
    this.state.options.map((data: any, key1: any) => {
      if(data.text == this.state.p.sponsor)
      {
          sponsor=data.key
          console.log(data.key)

      }
    })

    console.log(this.state.p.type)
    return <div>
<h1 className={styles.h1}>Notification</h1>
<p>Please Enter the following information about your product</p>

{/*
{ this.state.deleteConfirmation ?
<Modal isOpen={this.state.deleteModal} ><div className="deleteModal"><h2>Do you want to delete this product?</h2>
<div className={styles.flexrow}> <div><PrimaryButton className="deleteModalButtonYes"  onClick={this.delete.bind(this)}>YES</PrimaryButton>
</div>
<div>
<PrimaryButton className="deleteModalButtonNo"onClick={this.deleteModalFlag.bind(this)}>NO</PrimaryButton>
</div>
</div>
</div>

</Modal>: null
  } */}
<form>
<h2 className={styles.h1}>Product Details</h2>
    <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Product Name<span className={styles.red}>*</span></label>
            <TextField placeholder="Enter the product name" autoComplete="off" className={styles.input} defaultValue={this.props.p.Product_x0020_Name}  onChange={this.Name.bind(this)} name="namee" />
            <p id={styles.name_error}>{this.state.nameerror}</p>

        </div>
        <div className={styles.flexcol}>
        <label>Product Type<span className={styles.red}>*</span></label>
        <Dropdown placeholder="Product" onChange={this.Type.bind(this)} lang="type"
         defaultSelectedKey={type}
         className={styles.input} options={[
          {key:'1', text:'Product 1'},
          {key:'2', text:'Product 2'},
          {key:'3', text:'Product 3'},
        ]} />
         <p id={styles.type_error}>{this.state.typeerror}</p>
        </div>
    </div>
    <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Discipline<span className={styles.red}>*</span></label>
        <Dropdown  lang="dis"  placeholder="Select relevant discipline" onChange={this.discipline.bind(this)}
defaultSelectedKey={discipline}
 options={[
  {key:'1', text:'Product 1'},
  {key:'2', text:'Product 2'},
  {key:'3', text:'Product 3'},
]}
className={styles.input}/>
<p id={styles.dis_error}>{this.state.disciplineerror}</p>

        </div>
        <div className={styles.flexcol}>
        <label>Products Sponsor<span className={styles.red}>*</span></label>
        <Dropdown
        defaultSelectedKey={sponsor}
          placeholder="Select Product's practice"  onChange={this.sponsor.bind(this)}


          options={[
            {key:'1', text:'Product 1'},
            {key:'2', text:'Product 2'},
            {key:'3', text:'Product 3'},
          ]} className={styles.input}/>
          <p id={styles.sponsor_error} className={styles.error}>{this.state.sponsorerror}</p>
        </div>
        </div>
        <h2 className={styles.h1}>Product Information</h2>
        <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Product Description<span className={styles.red}>*</span></label>
        <TextField   multiline rows={4} className={styles.input} placeholder="Describe product in few words" defaultValue={this.props.p.Product_x0020_Descirption} onChange={this.Description.bind(this)} name="desc" />
        <p id={styles.desc_error} className={styles.error}>{this.state.descerror}</p>
        </div>
        <div className={styles.flexcol}>
        <label>Product scope<span className={styles.red}>*</span></label>
        <TextField multiline rows={4}  className={styles.input} placeholder="Enter Product Scope" defaultValue={this.props.p.Product_x0020_Scope} onChange={this.Scope.bind(this)} name="scope" />
        <p id={styles.scope_error} className={styles.error}>{this.state.scopeerror}</p>
        </div>
        </div>

        <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Target Market</label>
        <Dropdown placeholder="Enter Industry to which its targeted"
        defaultSelectedKey={target}
         onChange={this.target.bind(this)}  lang="target"
         options={[
          {key:'1', text:'Product 1'},
          {key:'2', text:'Product 2'},
          {key:'3', text:'Product 3'},
        ]}  className={styles.input} />

        </div>
        <div className={styles.flexcol}>
        <label>Related Products</label>
        <Dropdown onChange={this.relprod.bind(this)}  lang="relprod"

defaultSelectedKey={relprod}
          placeholder="Select Products realted to this one"
          options={[
            {key:'1', text:'Product 1'},
            {key:'2', text:'Product 2'},
            {key:'3', text:'Product 3'},
          ]}
        className={styles.input}/>
        </div>
        </div>

        <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Does the product overlap with existing Milliman's product</label>
        <Toggle lang="milli" className={styles.input} onText="On" offText="Off" defaultChecked={this.state.p.milli} onChange={this.milli.bind(this)}/>

        </div>
        <div className={styles.flexcol}>
        <label>IP Source</label>
        <Dropdown  lang="ip"
        defaultSelectedKey={ip}
           placeholder="Select Ip source" options={[
            {key:'1', text:'Product 1'},
            {key:'2', text:'Product 2'},
            {key:'3', text:'Product 3'},
          ]}    onChange={this.ip.bind(this)}
         className={styles.input}/>
        </div>
        </div>

        <div  className={styles.flexrow}>
        <div className={styles.flexcol}>
        <label>Product Finish Date</label>
        <input type="date" className={styles.inputdate} onChange={this.date.bind(this)} defaultValue={this.state.p.date}></input>
        </div>
        <div className={styles.flexcol}>
        <label>Select the other practices involved</label>
        <Dropdown  onChange={this.practice.bind(this)} lang="practice"
           defaultSelectedKey={practice}
           placeholder="Select the Other Practices involved"
        options={[
          {key:'1', text:'Product 1'},
          {key:'2', text:'Product 2'},
          {key:'3', text:'Product 3'},
        ]}  className={styles.input}/>
        </div>
        </div>

        { this.props.flagButton?
        <div className={styles.flexrow}>
        <PrimaryButton text={'Submit'} id={styles.submit} onClick={this.submit.bind(this)}/>
        <PrimaryButton text={'Save As Draft'}  id={styles.Draft} onClick={this.Name.bind(this)}/>
        </div>:
         <div className={styles.flexrow}>
         <PrimaryButton text={'Update'} id={styles.update} onClick={()=>this.updateitem()}/>
         {/* <PrimaryButton text={'Delete'} id={styles.delete}  onClick={this.Name.bind(this)} /> */}
         </div>
  }


</form>
</div>
  }
}

