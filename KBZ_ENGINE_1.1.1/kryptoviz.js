// /* KRYPTOBOOKZ ENGINE : KBZ
//  * descriptions:
//  * This engine looks up EPISODE IDTs
//  * From BLOCKCHAIN.
//  * Then converts IDX to IPFS URIs
//  * The content from IPFS is then
//  * LOAD and RENDER.
//  * If IDT is array, display last.
//  * LINKS displayed by 8GRID hash.
//  * On LINK, lookup and RENDER.
//  * Keep an ENGINE variable in series
//  * switch render by KBZ:1.1.1
    // * by spazeFalcon

// import { viz } from "./KBZ_ENGINE_1.1.1/kryptoviz.js";
/*********************************************************\
 * CREATE-KRYPTO-PAGE - 
 * //GENERIC CARD-TEMPLATE RENDERER (minimal behaviors)
 \********************************************************/
function createKRYPTO_PAGE(bitz, pgNum, pgTotal){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    console.log("render: ",bitz.IDX)

    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    pageSpacer.style.fontSize = "8px";
    pageSpacer.style.paddingTop = "1.44em"
    pageSpacer.style.paddingRight = "1em"
    // pageSpacer.style.paddingTop = "auto"
    // pageSpacer.style.paddingBottom = "auto"
    pageSpacer.style.color = '#071d30';
    pageSpacer.style.textAlign = 'right';
    if(pgNum && pgTotal) { pageSpacer.innerText = `${pgNum}.${pgTotal}`; }                    //pageNUM
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');
    pageSpacer.id = "Spacer_" + bitz.IDX;
    
    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    if(document.body.clientWidth > 888){ IMGBIT.style.borderWidth = "0px";  } //RESPONSIVE
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    IMGBIT.style.overflow = "hidden";     //CROP
    IMGBIT.style.marginBottom = "0em";   //CROP
    IMGBIT.classList.add('bluesteel-border-frame');

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.marginBottom = "-6.666em"     //CROP
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        imgCard1.style.width = "136%";              //WIDTH
        imgCard1.addEventListener("click", ()=> {
            imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            if(imgCard1.showDetails){
                imgCard1.style.marginBottom = "2.222em"
            }else{
                imgCard1.style.marginBottom = "-6.666em"
            }
        })
    } 

    var TXTBIT = 0;
    if(bitz.TXT){
        TXTBIT = document.createElement('article');
        TXTBIT.style.backgroundColor = 'black';
        // TXTBIT.style.backgroundColor = getRandoColor();
        TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
        TXTBIT.style.border = "1px solid purple"
        TXTBIT.style.borderRadius = "13px"
        TXTBIT.style.padding = "0.888em"
        TXTBIT.style.margin = "0.88em auto"
        TXTBIT.style.maxWidth = "42em"
        TXTBIT.style.cursor = "pointer"
        TXTBIT.style.overflow = "hidden";     //CROP
        TXTBIT.style.marginBottom = "1em";   //CROP
        TXTBIT.style.marginTop = "-6em";    //OVERLAP
        TXTBIT.style.borderTop = "none";    //OVERLAP
    } else { //no btz.TXT
        pageFrame.style.marginTop="6.666em";  //no txt padding
        pageFrame.style.marginBottom="6.666em"; //no txt padding
    }

    var txtCard2 = 0;
    if(bitz.TXT){
        txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        txtCard2.src = bitz.TXT; //large 600 size
        txtCard2.style.width = "100%"
        txtCard2.style.maxWidth = "32em"
        // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
        txtCard2.style.borderRadius = "18px"
        // txtCard2.style.marginBottom = "-6em"
        txtCard2.style.marginBottom = "-5.666em"
        txtCard2.style.marginTop = "3em"
        txtCard2.addEventListener("click", ()=> {
            txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
            if(txtCard2.showDetails){
                txtCard2.style.marginBottom = "0em"
            }else{
                txtCard2.style.marginBottom = "-5.666em"
            }
        })
    } 
        
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO PAGE 
/*********************************************************\
 * Render KRYPTO INTRO.
 \********************************************************/
 function createKRYPTO_INTRO(bitz){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    // let pageSpacer = document.createElement('section');
    // pageSpacer.style.backgroundColor = 'black';
    // pageSpacer.style.borderRadius = "10px";
    // pageSpacer.style.padding = "0.111em";
    // pageSpacer.style.margin = "0.444em";
    // pageSpacer.style.height = "4.444em";
    // // pageSpacer.style.marginBottom = "8.888%";
    // pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    // pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {
            // imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            // if(imgCard1.showDetails){
            //     imgCard1.style.marginBottom = "2.222em"
            // }else{
            //     imgCard1.style.marginBottom = "-6.666em"
            // }
        })
    } 

    //OPENSEA-LINK
    // let OSBTN = document.createElement('button');
    // OSBTN.innerHTML = `<span>${getOpenSeaIconLink(OSBTN, 'https://opensea.io/accounts/kryptospaze')}</span>`

    // var TXTBIT = 0;
    // if(bitz.TXT){
    //     TXTBIT = document.createElement('article');
    //     TXTBIT.style.backgroundColor = 'black';
    //     // TXTBIT.style.backgroundColor = getRandoColor();
    //     TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
    //     TXTBIT.style.border = "1px solid purple"
    //     TXTBIT.style.borderRadius = "13px"
    //     TXTBIT.style.padding = "0.888em"
    //     TXTBIT.style.margin = "0.88em auto"
    //     TXTBIT.style.maxWidth = "42em"
    //     TXTBIT.style.cursor = "pointer"
    //     TXTBIT.style.overflow = "hidden";     //CROP
    //     TXTBIT.style.marginBottom = "1em";   //CROP
    //     TXTBIT.style.marginTop = "-6em";    //OVERLAP
    //     TXTBIT.style.borderTop = "none";    //OVERLAP
    // } else { //no btz.TXT
        // pageFrame.style.marginTop="6.666em";  //no txt padding
        // pageFrame.style.marginBottom="6.666em"; //no txt padding
    // }

    // var txtCard2 = 0;
    // if(bitz.TXT){
    //     txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
    //     txtCard2.src = bitz.TXT; //large 600 size
    //     txtCard2.style.width = "100%"
    //     txtCard2.style.maxWidth = "32em"
    //     // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
    //     txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
    //     txtCard2.style.borderRadius = "18px"
    //     // txtCard2.style.marginBottom = "-6em"
    //     txtCard2.style.marginBottom = "-5.666em"
    //     txtCard2.style.marginTop = "3em"
    //     txtCard2.addEventListener("click", ()=> {
    //         txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
    //         if(txtCard2.showDetails){
    //             txtCard2.style.marginBottom = "0em"
    //         }else{
    //             txtCard2.style.marginBottom = "-5.666em"
    //         }
    //     })
    // } 
    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    // if (KRYPTOBOOKFrame1 && bitz.IDX!="1.0") { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    // if(OSBTN && IMGBIT){IMGBIT.insertAdjacentElement('beforeend', OSBTN);}
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO INTRO
/*********************************************************\
 * Render KRYPTO INTRO.
 \********************************************************/
 function createKRYPTO_OUTRO(bitz){  
    let pageFrame = document.createElement('section');
    pageFrame.style.backgroundColor = 'black';
    pageFrame.style.borderRadius = "10px";
    pageFrame.style.padding = "0.111em";
    pageFrame.style.margin = "0.444em";
    // pageFrame.style.marginBottom = "8.888%";
    pageFrame.style.boxShadow = "1px 1px 20px 0px blue";
    pageFrame.classList.add('bit-item');
    pageFrame.id = bitz.IDX;//.replace('.','-'));
    // console.log("render: ",bitz.IDX)
    let pageSpacer = document.createElement('section');
    pageSpacer.style.backgroundColor = 'black';
    pageSpacer.style.borderRadius = "10px";
    pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    // pageSpacer.style.marginBottom = "8.888%";
    pageSpacer.style.boxShadow = "1px 1px 20px 0px blue";
    pageSpacer.classList.add('bit-spacer');

    var IMGBIT = document.createElement('article');
    IMGBIT.style.backgroundColor = 'black';
    // IMGBIT.style.backgroundColor = getRandoColor();
    IMGBIT.style.border = "1px solid steelblue"
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    // IMGBIT.style.overflow = "hidden";     //CROP
    // IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.maxWidth = "444px";          //RESPONSIVE
        // imgCard1.style.marginBottom = "-6.666em" //CROP
        imgCard1.addEventListener("click", ()=> {
            // imgCard1.showDetails = (imgCard1.showDetails) ? 0 : 1;
            // if(imgCard1.showDetails){
            //     imgCard1.style.marginBottom = "2.222em"
            // }else{
            //     imgCard1.style.marginBottom = "-6.666em"
            // }
        })
    } 

    // var TXTBIT = 0;
    // if(bitz.TXT){
    //     TXTBIT = document.createElement('article');
    //     TXTBIT.style.backgroundColor = 'black';
    //     // TXTBIT.style.backgroundColor = getRandoColor();
    //     TXTBIT.style.boxShadow = "0px 0px 20px 1px blue"
    //     TXTBIT.style.border = "1px solid purple"
    //     TXTBIT.style.borderRadius = "13px"
    //     TXTBIT.style.padding = "0.888em"
    //     TXTBIT.style.margin = "0.88em auto"
    //     TXTBIT.style.maxWidth = "42em"
    //     TXTBIT.style.cursor = "pointer"
    //     TXTBIT.style.overflow = "hidden";     //CROP
    //     TXTBIT.style.marginBottom = "1em";   //CROP
    //     TXTBIT.style.marginTop = "-6em";    //OVERLAP
    //     TXTBIT.style.borderTop = "none";    //OVERLAP
    // } else { //no btz.TXT
        // pageFrame.style.marginTop="6.666em";  //no txt padding
        // pageFrame.style.marginBottom="6.666em"; //no txt padding
    // }

    // var txtCard2 = 0;
    // if(bitz.TXT){
    //     txtCard2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
    //     txtCard2.src = bitz.TXT; //large 600 size
    //     txtCard2.style.width = "100%"
    //     txtCard2.style.maxWidth = "32em"
    //     // txtCard2.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
    //     txtCard2.style.boxShadow = "inset rgb(30 84 200) 2px 2px 14px 8px"
    //     txtCard2.style.borderRadius = "18px"
    //     // txtCard2.style.marginBottom = "-6em"
    //     txtCard2.style.marginBottom = "-5.666em"
    //     txtCard2.style.marginTop = "3em"
    //     txtCard2.addEventListener("click", ()=> {
    //         txtCard2.showDetails = (txtCard2.showDetails) ? 0 : 1;
    //         if(txtCard2.showDetails){
    //             txtCard2.style.marginBottom = "0em"
    //         }else{
    //             txtCard2.style.marginBottom = "-5.666em"
    //         }
    //     })
    // } 
    //TODO Logic to add remove PAGE_SPACER, title page somehow...   
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
    if(imgCard1 && IMGBIT){IMGBIT.insertAdjacentElement('afterbegin', imgCard1);}
    // if(txtCard2 && TXTBIT){TXTBIT.insertAdjacentElement('afterbegin', txtCard2);}
    if (pageFrame && IMGBIT) { pageFrame.insertAdjacentElement('beforeend', IMGBIT); }
    // if (pageFrame && TXTBIT) { pageFrame.insertAdjacentElement('beforeend', TXTBIT); }
    if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageFrame); }
} //END CREATE KRYPTO OUTRO

// BR.innerHTML = `<span>${getOpenSeaIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
// function getOpenSeaIconLink(node, url){
//     node.style.marginTop = "-1em";
//     return node.innerHTML=`<a href="${url}" target="_blank"><img src="../images/osblue.png" class="hoverGlow" style="width:2em;border-radius:100%;"/></a>`          
// }

function getRandoColor(){
    const h = Math.floor(Math.random() * 344); 
    const s = Math.floor(Math.random() * 88); 
    const l = Math.floor(Math.random() * 88); 
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}

function create_META_VIEW(nft){
        //BUILD ARTCARD DISPLAY
        let artFrame = document.createElement('section');
        artFrame.style.backgroundColor = 'black';
        artFrame.style.borderRadius = "10px";
        artFrame.style.padding = "0.111em";
        artFrame.style.margin = "0.444em";
        let artCard = document.createElement('article');
        artCard.style.backgroundColor = viz.getRandoColor();
        artCard.style.border = "1px solid steelblue"
        artCard.style.borderRadius = "13.333px"
        artCard.style.padding = "0.888em"
        artCard.style.margin = "0.88em auto"
        artCard.style.maxWidth = "36em"
        //CARD IMG
        let artCardIMG = document.createElement('img'); //IMG
        artCardIMG.style.padding = "0.888em"
        artCardIMG.style.width = "88.8%"
        artCardIMG.style.maxWidth = "33em"
        artCardIMG.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        artCardIMG.style.borderRadius = "6.666px"
        artCardIMG.style.marginBottom = "1em"
        artCardIMG.style.zIndex = "9"
        artCardIMG.src = nft.PATH;   //large 600 size  //OTHER IMAGE TYPES HERE:
        // artCardIMG.src = nft.image_url;   //large 600 size  //OTHER IMAGE TYPES HERE:
        // artCardIMG.src = nft.image_original_url; //giant original size
        // artCardIMG.src = nft.image_preview_url;      //medium 350 size
        // artCardIMG.src = nft.image_thumbnail_url;   //small 200 size

        // debugger;
        let artCardVID = null;
        let artCardVIDBTN = null;
        // if(nft.meta.main.vid){ //SOUND-FLAG, render AUDIO-DISPLAY
        //     artCardVID = document.createElement('video'); //MP3
        //     artCardVID.src = nft.meta.main.vid; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
        //     // artCardVID.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
        //     artCardVID.style.padding = "0.888em"
        //     artCardVID.style.width = "100%"
        //     artCardVID.style.maxWidth = "33em"
        //     artCardVID.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        //     artCardVID.style.borderRadius = "6.666px"
        //     artCardVID.style.marginBottom = "1em"
        //     // artCardVID.style.maxHeight = "55px"
        //     artCardVID.controls = true;
        //     artCardVID.style.display = 'none';
        //     // artCardIMG = null; //do not show art card default
        //     artCardVIDBTN = document.createElement('section')
        //     artCardVIDBTN.innerHTML = `<div class="hoverGlowPlay" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;">
        //         <i class="fas fa-play" style="font-size:2em;color:white;border:1px solid skyblue;border-radius:100%;padding:0.2em;"></i>
        //         </div>`
        //     // artCardVIDBTN.style.cssText = "background: none; border: 0px;"
        //     // artCardVIDBTN.style.zIndex = "10"
        //     artCardVIDBTN.style.display = 'flex';
        //     artCardVIDBTN.style.marginTop = "-5em";
        //     artCardVIDBTN.style.marginLeft = "1em";
        //     // artCardVIDBTN.style.backgroundColor = "grey";
        //     artCardVIDBTN.style.borderRadius = "100%";
        //     artCardVIDBTN.addEventListener("click", ()=> {
        //         let vidz = document.getElementsByTagName('video') //stop all other vids
        //         for(vid of vidz){ vid.pause() }
        //         artCardVIDBTN.style.display = 'none';
        //         // artCardIMG.style.display = 'none'
        //         artCardIMG.style.cssText = 'height:12em;width:auto'
        //         artCardVID.style.display = '';
        //         artCardVID.play();
        //     })
        //     // artCardVIDBTN.classList.add("hoverGlowPlay");
        // }


        let artCardSND = null;
        // if(nft.meta.main.snd){ //SOUND-FLAG, render AUDIO-DISPLAY
        //     artCardSND = document.createElement('video'); //MP3
        //     artCardSND.src = nft.meta.main.snd; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
        //     // artCardSND.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
        //     artCardSND.style.padding = "0.888em"
        //     artCardSND.style.width = "100%"
        //     artCardSND.style.maxWidth = "28em"
        //     artCardSND.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        //     artCardSND.style.borderRadius = "6.666px"
        //     artCardSND.style.marginBottom = "1em"
        //     artCardSND.style.maxHeight = "55px"
        //     artCardSND.controls = true;
        // }
        // let artCardLINK = document.createElement('a'); //IMG LINK parent
        // artCard.src = nft.url
        //MAINTITLE
        let artCardMainTitle = document.createElement('section'); //Title 1
        artCardMainTitle.style.padding = "0.444em"
        artCardMainTitle.style.borderRadius = "13px"
        artCardMainTitle.style.border = "1px solid steelblue"
        artCardMainTitle.innerText = nft.id; //NAME
        artCardMainTitle.style.backgroundColor = "#05112a"
        //SUBTITLE
        let artCardSubTitle = document.createElement('section'); //Title 2
        artCardSubTitle.style.padding = "0.111em"
        artCardSubTitle.style.textShadow = "1px 2px 1px black";
        artCardSubTitle.style.display = "flex";
        artCardSubTitle.style.justifyContent = "space-between";
        //THREE-PART-SUB-TITLE
        let BR = document.createElement('aside'); //sub
        let DWN = document.createElement('aside'); //sub
        let BL = document.createElement('aside'); //sub
        BR.innerHTML = "<span>\\</span>"
        // BR.innerHTML = `<span>${getIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
        DWN.innerHTML = "<span>~</span>"
        BL.innerHTML = "<span>2021</span>"
        // setMETA(nft)

        
        // if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
        //     if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, {url: 'https://opensea.io/accounts/kryptospaze'}) : BR.innerHTML = nft.meta.BR}
        // }


        //SUPERTITLE
        let artCardSuperTitle = document.createElement('section'); //Title 2
        artCardSuperTitle.style.padding = "0.111em"
        artCardSuperTitle.style.textShadow = "1px 2px 1px black";
        artCardSuperTitle.style.display = "flex";
        artCardSuperTitle.style.justifyContent = "space-between";
        artCardSuperTitle.style.marginTop =  "-0.444em";
        artCardSuperTitle.style.paddingBottom = "0.888em";
        //THREE-PART-SUPER-TITLE
        let TR = document.createElement('aside'); //super
        let UP = document.createElement('aside'); //super
        let TL = document.createElement('aside'); //super
        TR.innerHTML = "<span>\\</span>"
        UP.innerHTML = `<span>${nft.id}</span>`
        TL.innerHTML = "<span>2021</span>"
        // debugger; //METACARD useMETA for display
        
        // setMETA(nft)
        // if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
        //     //for(nftLink of nft.meta) //TODO
        //     // if(nft.meta.TL){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TL.innerHTML = nft.meta.TL}
        //     // if(nft.meta.UP){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :UP.innerHTML = nft.meta.UP}
        //     // if(nft.meta.TR){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TR.innerHTML = nft.meta.TR}
        //     // if(nft.meta.BL) (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :{BL.innerHTML = nft.meta.BL}
        //     // if(nft.meta.DWN){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :DWN.innerHTML = nft.meta.DWN}
        //     if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, nft.meta.BR.url) : BR.innerHTML = nft.meta.BR}
        // }
        //INSERT INTO DOM-.
        if (artCard && artCardVID) { artCard.insertAdjacentElement('afterbegin', artCardVID); }
        if (artCard && artCardSND) { artCard.insertAdjacentElement('afterbegin', artCardSND); }
        if (artCard && artCardVIDBTN) { artCard.insertAdjacentElement('afterbegin', artCardVIDBTN); }
        if (artCard && artCardIMG) { artCard.insertAdjacentElement('afterbegin', artCardIMG); }
        if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',TR); }
        if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',UP); }
        if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',TL); }
        if (artCard) { artCard.insertAdjacentElement('afterbegin',artCardSuperTitle); }
        if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',BL); }
        if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',DWN); }
        if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',BR); }
        if (artCard) { artCard.insertAdjacentElement('beforeend',artCardMainTitle); }
        if (artCard) { artCard.insertAdjacentElement('beforeend',artCardSubTitle); }
        if (artFrame && artCard) { artFrame.insertAdjacentElement('beforeend', artCard); }
        if (nftDisplay1) { nftDisplay1.insertAdjacentElement('beforeend', artFrame); }
    } //END CREATE META CARD

let viz = {
 create_META_VIEW:create_META_VIEW,
 createKRYPTO_INTRO:createKRYPTO_INTRO,
 createKRYPTO_OUTRO:createKRYPTO_OUTRO,
 createKRYPTO_PAGE:createKRYPTO_PAGE,
 getRandoColor:getRandoColor
}

export { viz };


