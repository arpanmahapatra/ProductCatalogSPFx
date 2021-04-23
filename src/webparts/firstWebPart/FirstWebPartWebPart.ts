import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'FirstWebPartWebPartStrings';
import FirstWebPart from './components/FirstWebPart';
import { IFirstWebPartProps } from './components/IFirstWebPartProps';
import { sp } from "@pnp/sp/presets/all";
import DisplayForm from './components/DisplayForm';

export interface IFirstWebPartWebPartProps {
  description: string;

}

export default class FirstWebPartWebPart extends BaseClientSideWebPart<IFirstWebPartWebPartProps> {

  // public onInit(): Promise<void> {
  //   return super.onInit().then(() => {
  //     sp.setup({ spfxContext: this.context });
  //   });
  // }
  public render(): void {
    const element: React.ReactElement<IFirstWebPartProps> = React.createElement(
      FirstWebPart,
      {
        description: this.properties.description,
        context:this.context

      },
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  // protected get dataVersion(): Version {
  //   return Version.parse('1.0');
  // }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
