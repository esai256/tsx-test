import Vue from 'vue';
import TextComponent from './components/TextComponent';

function onDocumentReady() {
  return new Promise((resolve) => {
    document.addEventListener('DOMContentLoaded', () => {
      resolve();
    });
  });
}

async function doThings() {
  await onDocumentReady();

  new Vue({
    el: '#el',
    components: {TextComponent},
    template: `
      Dinge und Sachen
      <text-component></text-component>
    `
  })
}

doThings();
