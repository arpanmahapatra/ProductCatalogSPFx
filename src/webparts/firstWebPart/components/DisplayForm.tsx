import * as React from 'react';
import styles from './FirstWebPart.module.scss';
import { DocumentCard, Panel, PanelType } from '@fluentui/react'


import { escape } from '@microsoft/sp-lodash-subset';
import { FirstWebState } from './FirstWebState';
import { spoperations } from '../../../Services/Services';
import { PrimaryButton } from 'office-ui-fabric-react';
import { WebPartContext } from '@microsoft/sp-webpart-base';


export interface Props {
p:any,
context:WebPartContext,
}
export interface State{
}
export default class DisplayForm extends React.Component<Props,State, {}> {

  private spo1 : spoperations;
  constructor(props:Props)
  {
    super(props);
    this.spo1  = new spoperations();


  }

  public render(): React.ReactElement<Props>
  {
    console.log("AAA");
    return  <div>




            <p className={styles.h1}>Details</p>

            <hr></hr>

            <div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Description</p>
                    {this.props.p.Product_x0020_Descirption}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Name</p>
                    {this.props.p.Product_x0020_Name}
                </div>
            </div>
            <div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Type</p>
                    {this.props.p.Product_x0020_Type}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Discipline</p>
                    {this.props.p.Discipline.toString()}
                </div>
            </div>
            <div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Sponsor</p>
                    {this.props.p.Product_x0020_Sponsor.toString()}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Scope</p>
                    {this.props.p.Product_x0020_Scope}
                </div>
            </div>
            <div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Target</p>
                    {this.props.p.Target_x0020_Market}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Relative Products</p>
                    {this.props.p.Related_x0020_Products}
                </div>
            </div><div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Milliman Products</p>
                    {this.props.p.Does_x0020_Product_x0020_overlap.toString()}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Ip</p>
                    {this.props.p.Ip_x0020_Source}
                </div>
            </div>
            <div className={styles.flexrow}>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Date</p>
                    {this.props.p.Other_x0020_Practices_x0020_Invo}
                </div>
                <div className={styles.displayOfEachAttribute}>
                    <p className={styles.h1}>Practice</p>
                    {this.props.p.Product_x0020_Finish_x0020_Date}
                </div>
            </div>

        </div>



  }
}
