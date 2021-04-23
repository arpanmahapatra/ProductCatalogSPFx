import { WebPartContext } from "@microsoft/sp-webpart-base"
import {SPHttpClient, SPHttpClientResponse,ISPHttpClientOptions } from "@microsoft/sp-http"
import { IDropdownOption } from "office-ui-fabric-react";
import {} from "@pnp/common"
import { ConsoleListener } from "@pnp/logging"
import {} from "@pnp/odata"
import { sp, Web } from "@pnp/sp/presets/all"

export class spoperations{



  public getAllList(context:WebPartContext):Promise<any[]>{


    let restApiUrl:string=context.pageContext.web.absoluteUrl+"/_api/web/lists/getByTitle('ProductCatalog1')/items"
    var titles:any=[];
    return new Promise<any>(async(resolve,reject)=>{
      context.spHttpClient.get(restApiUrl,SPHttpClient.configurations.v1).then((response:SPHttpClientResponse)=>{
        response.json().then((results:any)=>{
          console.log(results.value)
          results.value.map((result:any)=>
         {

          titles.push(result);
         })
         resolve(titles);


        },(error:any)=>{
          reject("Error Occured")
        })

        });


    })
}

public print(context:WebPartContext):Promise<any[]>{


  let restApiUrl:string=context.pageContext.web.absoluteUrl+"/_api/web/lists/getByTitle('ProductCatalog1')/items"
  let titles:any=[];
  return new Promise<any>(async(resolve,reject)=>{
    context.spHttpClient.get(restApiUrl,SPHttpClient.configurations.v1).then((response:SPHttpClientResponse)=>{
      response.json().then((results:any)=>{
        console.log(results.value)
        results.value.map((result:any)=>
       {

        titles.push(result);
       })
       resolve(titles);


      },(error:any)=>{
        reject("Error Occured")
      })

      });


  })
}





public createListItem( p:{
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
  }, context:WebPartContext):Promise<any[]>{

  let restApiUrl:string="https://barcelona12345.sharepoint.com"+ "/_api/web/lists/getByTitle('ProductCatalog1')/items"
  console.log(p.namee)

  const body: string = JSON.stringify({

    '__metadata': {
      'type': "SP.Data.ProductCatalog1ListItem"
    },
    'Title': "Person 3",
    'Product_x0020_Name': p.namee,
    'Discipline':p.discipline,
    'Ip_x0020_Source': p.ip,
    'Product_x0020_Descirption':p.desc,
    'Does_x0020_Product_x0020_overlap':p.milli,
    'Product_x0020_Type': p.type,
     'Related_x0020_Products': p.relprod,
     'Product_x0020_Finish_x0020_Date' :p.date,
     'Product_x0020_Scope': p.scope,
     'Target_x0020_Market': p.target,
     'Other_x0020_Practices_x0020_Invo':p.practice,
     'Product_x0020_Sponsor': p.sponsor,




  });

  const options:any ={headers:{Accept:"applications/json;odata=nometadata", "content-type": "application/json;odata=verbose","odata-version":"",},body:body}
  return new Promise<any>(async(resolve,reject)=>{
    context.spHttpClient.post(restApiUrl,SPHttpClient.configurations.v1,options);




  })
}


public delete(p:any ,context:WebPartContext):Promise<any[]>{
  console.log(p.Id);
  let restApiUrl:string="https://barcelona12345.sharepoint.com"+ "/_api/web/lists/getByTitle('ProductCatalog1')/items"
  return new Promise<any[]>(async(resolve,reject)=>{


    context.spHttpClient.post(restApiUrl+"("+p.Id+")",SPHttpClient.configurations.v1,{
      headers:{Accept:"applications/json;odata=nometadata", "content-type": "application/json;odata=verbose","odata-version":"",
       "IF-MATCH":"*",
       "X-HTTP-METHOD":"DELETE"

    }
    }).then((response:SPHttpClientResponse)=>{

    })

  })



}


public edit(p:any ,context:WebPartContext):Promise<any[]>{
  console.log(p);
  let restApiUrl:string="https://barcelona12345.sharepoint.com"+ "/_api/web/lists/getByTitle('ProductCatalog1')/items"+"("+p.id+")"

  const body: string = JSON.stringify({

    '__metadata': {
      'type': "SP.Data.ProductCatalog1ListItem"
    },
    'Title': "Person 3",
    'Product_x0020_Name': p.namee,
    'Discipline':p.discipline,
    'Ip_x0020_Source': p.ip,
    'Product_x0020_Descirption':p.desc,
    'Does_x0020_Product_x0020_overlap':p.milli,
    'Product_x0020_Type': p.type,
     'Related_x0020_Products': p.relprod,
     'Product_x0020_Finish_x0020_Date' :p.date,
     'Product_x0020_Scope': p.scope,
     'Target_x0020_Market': p.target,
     'Other_x0020_Practices_x0020_Invo':p.practice,
     'Product_x0020_Sponsor': p.sponsor,

  });
  return new Promise<any[]>(async(resolve,reject)=>{


    context.spHttpClient.post(restApiUrl,SPHttpClient.configurations.v1,{
      headers:{Accept:"applications/json;odata=nometadata", "content-type": "application/json;odata=verbose","odata-version":"",
       "IF-MATCH":"*",
       "X-HTTP-METHOD":"MERGE"

    },body:body,
    }).then((response:SPHttpClientResponse)=>{

    })

  })



}



}











