import { defineCustomElement } from 'vue';
import './style.css';
import App from './App.vue';
import { GM_getResourceText, GM_info, GM_log } from '$'

GM_log(GM_info.script.version)
const BackTopAppElement = defineCustomElement(App, {
  styles: [GM_getResourceText('vant.index.css')]
})
customElements.define('easy-back-top', BackTopAppElement)
document.body.appendChild(new BackTopAppElement()) 