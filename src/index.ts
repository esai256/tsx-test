import Vue from 'vue';
import TextComponent from './components/TextComponent';
import EmailComponent from './components/EmailComponent';
import ToggleComponent from './components/ToggleComponent';
import 'babel-polyfill';

function onDocumentReady() {
  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => {
      const element = document.createElement('div');

      element.setAttribute("id", "el");

      document.documentElement.appendChild(element);
      resolve();
    });
  });
}

async function doThings() {
  await onDocumentReady();

  new Vue({
    el: '#el',
    components: {
      TextComponent,
      EmailComponent,
      ToggleComponent
    },
    template: `
      <div>
        <text-component></text-component>
        <email-component></email-component>
        <toggle-component></toggle-component>
      <div>
    `
  });
}

doThings();
