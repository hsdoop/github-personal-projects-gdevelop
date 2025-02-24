var gdjs;(function(l){const a=new l.Logger("PIXI Image manager"),T=(n,e)=>{a.error("Unable to load file "+n+" with error:",e||"(unknown error)")},d=(n,e)=>{!n||e.smoothed||(n.baseTexture.scaleMode=PIXI.SCALE_MODES.NEAREST)},A=(n,e)=>{e&&!e.smoothed&&(n.magFilter=THREE.NearestFilter,n.minFilter=THREE.NearestFilter)},g=["image","video"];class x{constructor(e){this._loadedTextures=new l.ResourceCache;this._diskTextures=new Map;this._rectangleTextures=new Map;this._scaledTextures=new Map;this._getImageResource=e=>{const r=this._resourceLoader.getResource(e);return r&&this.getResourceKinds().includes(r.kind)?r:null};this._resourceLoader=e,this._invalidTexture=PIXI.Texture.from("data:image/png;base64,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",{width:192,height:192}),this._loadedThreeTextures=new Hashtable,this._loadedThreeMaterials=new Hashtable}getResourceKinds(){return g}getPIXITexture(e){const r=this._getImageResource(e);if(!r)return a.warn('Unable to find texture for resource "'+e+'".'),this._invalidTexture;const t=this._loadedTextures.get(r);return t?t.valid?t:(a.error("Texture for "+e+" is not valid anymore (or never was)."),this._invalidTexture):this._invalidTexture}getOrLoadPIXITexture(e){const r=this._getImageResource(e);if(!r)return a.warn('Unable to find texture for resource "'+e+'".'),this._invalidTexture;const t=this._loadedTextures.get(r);if(t)return t.valid?t:(a.error("Texture for "+e+" is not valid anymore (or never was)."),this._invalidTexture);a.log('Loading texture for resource "'+e+'"...');const i=r.file,o=this._resourceLoader.getFullUrl(i),s=PIXI.Texture.from(o,{resourceOptions:{crossorigin:this._resourceLoader.checkIfCredentialsRequired(i)?"use-credentials":"anonymous"}}).on("error",u=>{T(i,u)});if(!s)throw new Error("Texture loading by PIXI returned nothing for file "+i+" behind url "+o);return d(s,r),this._loadedTextures.set(r,s),s}getThreeTexture(e){const r=this._loadedThreeTextures.get(e);if(r)return r;const t=this.getPIXITexture(e);if(!this._resourceLoader._runtimeGame.getRenderer().getPIXIRenderer())throw new Error("No PIXI renderer was found.");const o=t.baseTexture.resource.source;if(!(o instanceof HTMLImageElement))throw new Error(`Can't load texture for resource "${e}" as it's not an image.`);const s=new THREE.Texture(o);s.magFilter=THREE.LinearFilter,s.minFilter=THREE.LinearFilter,s.wrapS=THREE.RepeatWrapping,s.wrapT=THREE.RepeatWrapping,s.colorSpace=THREE.SRGBColorSpace,s.needsUpdate=!0;const u=this._getImageResource(e);return A(s,u),this._loadedThreeTextures.put(e,s),s}getThreeMaterial(e,{useTransparentTexture:r,forceBasicMaterial:t}){const i=`${e}|${r?1:0}|${t?1:0}`,o=this._loadedThreeMaterials.get(i);if(o)return o;const s=t?new THREE.MeshBasicMaterial({map:this.getThreeTexture(e),side:r?THREE.DoubleSide:THREE.FrontSide,transparent:r}):new THREE.MeshStandardMaterial({map:this.getThreeTexture(e),side:r?THREE.DoubleSide:THREE.FrontSide,transparent:r,metalness:0});return this._loadedThreeMaterials.put(i,s),s}getPIXIVideoTexture(e){if(e==="")return this._invalidTexture;const r=this._getImageResource(e);if(!r)return a.warn('Unable to find video texture for resource "'+e+'".'),this._invalidTexture;const t=this._loadedTextures.get(r);return t||this._invalidTexture}getInvalidPIXITexture(){return this._invalidTexture}async loadResource(e){const r=this._resourceLoader.getResource(e);if(!r){a.warn('Unable to find texture for resource "'+e+'".');return}await this._loadTexture(r)}async processResource(e){}async _loadTexture(e){if(!this._loadedTextures.get(e))try{if(e.kind==="video")await new Promise((r,t)=>{const i=PIXI.Texture.from(this._resourceLoader.getFullUrl(e.file),{resourceOptions:{crossorigin:this._resourceLoader.checkIfCredentialsRequired(e.file)?"use-credentials":"anonymous",autoPlay:!1}}).on("error",s=>{t(s)});i.baseTexture.on("loaded",()=>{this._loadedTextures.set(e,i),d(i,e),r()}).on("error",s=>{t(s)})});else{const r=PIXI.Texture.from(this._resourceLoader.getFullUrl(e.file),{resourceOptions:{autoLoad:!1,crossorigin:this._resourceLoader.checkIfCredentialsRequired(e.file)?"use-credentials":"anonymous"}});await r.baseTexture.resource.load(),this._loadedTextures.set(e,r),d(r,e)}}catch(r){T(e.file,r)}}getOrCreateDiskTexture(e,r){let t=this._diskTextures.get(e);if(!t){const i=new PIXI.Graphics;i.lineStyle(0,0,0),i.beginFill(l.rgbToHexNumber(255,255,255),1),i.drawCircle(0,0,e),i.endFill(),t=r.generateTexture(i),i.destroy(),this._diskTextures.set(e,t)}return t}getOrCreateRectangleTexture(e,r,t){const i=`${e}_${r}`;let o=this._rectangleTextures.get(i);if(!o){const s=new PIXI.Graphics;s.lineStyle(0,0,0),s.beginFill(l.rgbToHexNumber(255,255,255),1),s.drawRect(0,0,e,r),s.endFill(),o=t.generateTexture(s),s.destroy(),this._rectangleTextures.set(i,o)}return o}getOrCreateScaledTexture(e,r,t,i){const o=`${e}_${r}_${t}`;let s=this._scaledTextures.get(o);if(!s){const u=new PIXI.Graphics,c=new PIXI.Sprite(this.getPIXITexture(e));c.width=r,c.height=t,u.addChild(c),s=i.generateTexture(u),u.destroy(),this._scaledTextures.set(o,s)}return s}dispose(){this._loadedTextures.clear();const e=[];this._loadedThreeTextures.values(e),this._loadedThreeTextures.clear();for(const t of e)t.dispose();const r=[];this._loadedThreeMaterials.values(r),this._loadedThreeMaterials.clear();for(const t of r)t.dispose();for(const t of this._diskTextures.values())t.destroyed||t.destroy();this._diskTextures.clear();for(const t of this._rectangleTextures.values())t.destroyed||t.destroy();this._rectangleTextures.clear();for(const t of this._scaledTextures.values())t.destroyed||t.destroy();this._scaledTextures.clear()}}l.PixiImageManager=x,l.ImageManager=l.PixiImageManager})(gdjs||(gdjs={}));
//# sourceMappingURL=pixi-image-manager.js.map
