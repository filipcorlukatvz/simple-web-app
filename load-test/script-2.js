import launcher from "k6/x/browser";
import { sleep } from 'k6';

export default function() {
   const browser = launcher.launch('chromium', { headless: true });
   const context = browser.newContext();
   const page = context.newPage();
   let vrijeme = new Date().valueOf();

   // Goto main page, open it, close it
   page.goto('http://127.0.0.1:8080/', { waitUntil: 'networkidle' });
   page.screenshot({ path: `ss/${vrijeme}.png` });
   sleep(10);
   page.close();
   browser.close();
}
