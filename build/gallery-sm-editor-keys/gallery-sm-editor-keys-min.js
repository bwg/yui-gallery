YUI.add("gallery-sm-editor-keys",function(e,t){var n=e.Base.create("editorKeys",e.Base,[],{ignoreKeyCodes:{16:"shift",17:"ctrl",18:"alt",91:"leftmeta",93:"rightmeta",224:"meta"},keyCodeMap:{8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",33:"pgup",34:"pgdown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",46:"delete",49:"!",61:"=",173:"-",187:"=",189:"-",190:".",191:"?",219:"[",221:"]"},keyCommands:{"ctrl+-":"decreaseFontSize","ctrl+=":"increaseFontSize","ctrl+b":"bold","ctrl+i":"italic","ctrl+u":"underline",tab:"_insertTab"},initializer:function(){this._attachKeyEvents()},destructor:function(){this._detachKeyEvents()},_attachKeyEvents:function(){if(this._keyEvents)return;var e=this.get("container");this._keyEvents=[e.delegate("keydown",this._onKeyDown,this.selectors.input,this)]},_detachKeyEvents:function(){this._keyEvents&&((new e.EventHandle(this._keyEvents)).detach(),this._keyEvents=null)},_onKeyDown:function(e){var t=e.keyCode;if(this.ignoreKeyCodes[t])return;var n=[];e.altKey&&n.push("alt"),(e.ctrlKey||e.metaKey)&&n.push("ctrl"),e.shiftKey&&n.push("shift"),n.push(this.keyCodeMap[t]||String.fromCharCode(t).toLowerCase());var r=this.keyCommands[n.join("+")];if(r){var i=r.fn||r,s=this;typeof i=="string"&&(i=this[i]),r.allowDefault||e.preventDefault(),r.async?setTimeout(function(){i.call(s,e,n)},0):i.call(this,e,n)}}});e.namespace("Editor").Keys=n},"@VERSION@",{requires:["gallery-sm-editor-base"]});