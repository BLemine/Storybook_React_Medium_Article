import React from 'react';
import CoolBtn from "./CoolBtn";
import CoolBtnDocs from "./CoolBtnDocs.mdx"
export default {
  title: 'CustomUI/SomeMagic',
  component: CoolBtn,
  
  // parameters: {
  //   docs: {
  //     page: CoolBtnDocs,
  //   }
  // }
};

export const CoolBtnStory = (args) => <CoolBtn {...args} />;
export const AnotherInstance = (args) => <CoolBtn {...args} />;

CoolBtnStory.args = {
  primary: true,
  label: 'CustomBtn',
  action:()=>{
    alert("Hi, just clicked your cool button 😊")
  }
};
AnotherInstance.args={
  primary: false,
  label: 'QuickBtn',
  action:()=>{
    alert("I'm another different instance 😊")
  },
  color:"white"
}