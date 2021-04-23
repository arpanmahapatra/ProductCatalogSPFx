import * as React from 'react';
import styles from './FirstWebPart.module.scss';
import { DocumentCard, Panel, PanelType, PrimaryButton } from '@fluentui/react'

import { IFirstWebPartProps} from './IFirstWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { FirstWebState } from './FirstWebState';
import { spoperations } from '../../../Services/Services';
import DisplayForm from './DisplayForm';
import Form from './Form';






export default class FirstWebPart extends React.Component<IFirstWebPartProps,FirstWebState, {}> {
  private spo : spoperations;
  constructor(props:IFirstWebPartProps)
  {
    super(props);
    this.spo  = new spoperations();
    this.state = {prod:[],display:false,tempDisplay:null,displayF:false, tempAdding:[],submitoredit:true}
  }

public componentDidMount() {
  this.spo.getAllList(this.props.context).then((result)=>{
    this.setState({prod:result})
  });

}
public display(p:any)
{
 this.setState({
   display:true,
   tempDisplay:p,
 })



}
public add()
{
  this.setState({
    displayF:true
  })
}

public close()
{
  this.setState({
    display:false
  })
}
public closeF()
{
  this.setState({
    displayF:false
  })
}
  public render(): React.ReactElement<IFirstWebPartProps> {
   console.log(this.state.prod)
    return (
<div>
<PrimaryButton id={styles.add} onClick={()=>this.add()}>Add Items</PrimaryButton>

  <div className={styles.flexrow}>
         {
         this.state.prod.length!=0?

         this.state.prod.map((p)=>{
          return <div onClick={()=>this.display(p)}


            className={styles.prodcard} ><DocumentCard>
          <div className={styles.card}><h2>{p.Product_x0020_Name}</h2>
                      <p>{p.Product_x0020_Sponsor}</p>
                 </div></DocumentCard>
                 {

              this.state.display==true ?
              <Panel type={PanelType.extraLarge} isOpen={this.state.display}>

<div className={styles.flexrow}>
            <h2 className={styles.h1}>{this.state.tempDisplay.Product_x0020_Name}</h2>
            <div><PrimaryButton  id={styles.delete} onClick={()=>{
              this.spo.delete(this.state.tempDisplay,this.props.context).then((result)=>{
                this.setState({
                  display:false
                })
              });
              this.spo.getAllList(this.props.context).then((result)=>{
                this.setState({prod:result})
              });
            }}>Delete</PrimaryButton></div>
            <div><PrimaryButton  id={styles.delete} onClick={()=>{
              this.setState({
                displayF:true,tempAdding:p,
                submitoredit:false
              })

            }}>Edit</PrimaryButton></div>

            </div>
                <DisplayForm p={this.state.tempDisplay} context={this.props.context}/></Panel>:null

            }
</div>

         }):null

  }
  </div>

        {
          this.state.displayF==true ?
          <Panel type={PanelType.extraLarge} isOpen={this.state.displayF} onDismiss={()=>this.closeF()}>

            <Form p={this.state.tempAdding} context={this.props.context} flagButton={this.state.submitoredit}/></Panel>:null
        }

  </div>





    )
}

}

/*
  <button onClick={()=>this.spo.deleteListItem(this.state.prod.length).then((result)=>{
    this.setState({prod:result})
  })}>Delete Last</button>
       </div> */
