import Vue from 'vue';
import TextComponent from './components/TextComponent';
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
    components: { TextComponent },
    template: `
      <text-component></text-component>
    `
  });
}

doThings();
