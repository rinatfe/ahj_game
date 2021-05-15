function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(r,e){var t=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=t){var o,n,a=[],i=!0,l=!1;try{for(t=t.call(r);!(i=(o=t.next()).done)&&(a.push(o.value),!e||a.length!==e);i=!0);}catch(r){l=!0,n=r}finally{try{i||null==t.return||t.return()}finally{if(l)throw n}}return a}}function _arrayWithHoles(r){if(Array.isArray(r))return r}import"core-js/modules/es.array.join.js";import"core-js/modules/es.array.iterator.js";import"core-js/modules/es.object.to-string.js";import"core-js/modules/web.dom-collections.iterator.js";import"core-js/modules/es.array.concat.js";import"core-js/modules/es.array.slice.js";import"core-js/modules/es.function.name.js";import"core-js/modules/es.array.from.js";import"core-js/modules/es.string.iterator.js";import"core-js/modules/es.symbol.js";import"core-js/modules/es.symbol.description.js";import"core-js/modules/es.symbol.iterator.js";function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var o=0,n=function(){};return{s:n,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,l=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return i=r.done,r},e:function(r){l=!0,a=r},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw a}}}}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}var boardEl=document.getElementById("board"),field=[["","","",""],["","","",""],["","","",""],["","","",""]],elem=boardEl.children,face=document.createElement("img");function renderBoard(r){var e,t=[],o=_createForOfIteratorHelper(r.entries());try{for(o.s();!(e=o.n()).done;){var n,a=_slicedToArray(e.value,2),i=a[0],l=_createForOfIteratorHelper(a[1].entries());try{for(l.s();!(n=l.n()).done;){var s=_slicedToArray(n.value,2),c=s[0],u=s[1];t.push('\n          <div class="field '.concat(u?"busy":"free",'" \n              data-row="').concat(i,'" \n              data-col="').concat(c,'"\n              style="grid-row:').concat(i+1,";grid-column:").concat(c+1,';"\n          >\n            ').concat(u||"","\n          </div>\n        "))}}catch(r){l.e(r)}finally{l.f()}}}catch(r){o.e(r)}finally{o.f()}boardEl.innerHTML=t.join("")}function getRandomInt(r,e){var t=Math.ceil(r),o=Math.floor(e);return Math.floor(Math.random()*(o-t))+t}face.src="./images/goblin.png",renderBoard(field),setInterval((function(){elem[getRandomInt(0,elem.length)].appendChild(face)}),1e3);