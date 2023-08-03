// @ts-ignore
import textfit from '../lib/textFit.js';

export const runTextFit = (element: HTMLDivElement) : void => {
  textfit(element, {
    maxFontSize: 500,
  });
};

export const openAllLinksInNewTab = () : void => {
  document
    .querySelectorAll(".slide-content a")
    .forEach((element) => {
      element.setAttribute("target", "_blank");
    });
};
