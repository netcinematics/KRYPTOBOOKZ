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
    pageSpacer.style.padding = "0.111em";
    pageSpacer.style.margin = "0.444em";
    pageSpacer.style.height = "4.444em";
    pageSpacer.style.fontSize = "8px";
    pageSpacer.style.paddingTop = "1em"
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
    IMGBIT.style.borderRadius = "13px"
    IMGBIT.style.padding = "0.888em"
    IMGBIT.style.margin = "0.88em auto"
    IMGBIT.style.maxWidth = "44em"
    IMGBIT.style.cursor = "pointer"
    IMGBIT.style.overflow = "hidden";     //CROP
    IMGBIT.style.marginBottom = "0em";   //CROP

    var imgCard1 = 0;
    if(bitz.IMG){
        imgCard1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        imgCard1.src = bitz.IMG; //large 600 size
        imgCard1.style.width = "100%"
        imgCard1.style.boxShadow = `2px 2px 8px 4px ${getRandoColor()}`
        imgCard1.style.borderRadius = "18px"
        imgCard1.style.marginBottom = "-6.666em"     //CROP
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
    // if (KRYPTOBOOKFrame1 && bitz.IDX!="1.0") { KRYPTOBOOKFrame1.insertAdjacentElement('beforeend', pageSpacer); }
    // if (pageFrame && pageCard) { pageFrame.insertAdjacentElement('beforeend', pageCard); }
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

function getRandoColor(){
    const h = Math.floor(Math.random() * 344); 
    const s = Math.floor(Math.random() * 88); 
    const l = Math.floor(Math.random() * 88); 
    return `hsl(${h}deg, ${s}%, ${l}%)`;
}

let viz = {
 createKRYPTO_INTRO:createKRYPTO_INTRO,
 createKRYPTO_PAGE:createKRYPTO_PAGE,
 getRandoColor:getRandoColor
}

export { viz };


