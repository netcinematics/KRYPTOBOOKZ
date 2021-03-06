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

//TODO Page Title???
{/* <header  style="padding:0.666em;">
    <section style="margin: 0.222em;">
        <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">KRYPTOBOOKZ</span><span class="tradeMark">&trade;</span>
    </section>
</header> */}

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

function create_Dynamic_TTL(ttltxt, displayFrame){
    let dynamicTitleMarkup=`
        <header>
            <section style="margin: 0.222em;">
                <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">${ttltxt}</span><span class="tradeMark">&trade;</span>
            </section>
        </header>
    `;
    displayFrame.innerHTML = dynamicTitleMarkup;
}
function create_META_VIEW(nft){
        //BUILD METACARD DISPLAY
        let metaFrame = document.createElement('section');
        metaFrame.style.backgroundColor = 'black';
        metaFrame.style.borderRadius = "10px";
        metaFrame.style.padding = "0.111em";
        metaFrame.style.margin = "0.444em";
        let metaCard = document.createElement('article');
        metaCard.style.backgroundColor = viz.getRandoColor();
        metaCard.style.border = "1px solid steelblue"
        metaCard.style.borderRadius = "13.333px"
        metaCard.style.padding = "0.888em"
        metaCard.style.margin = "0.88em auto"
        metaCard.style.maxWidth = "36em"
        //CARD IMG
        let metaCardIMG = document.createElement('img'); //IMG
        metaCardIMG.style.padding = "0.888em"
        metaCardIMG.style.width = "88.8%"
        metaCardIMG.style.maxWidth = "33em"
        metaCardIMG.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        metaCardIMG.style.borderRadius = "6.666px"
        metaCardIMG.style.marginBottom = "1em"
        metaCardIMG.style.zIndex = "9"
        metaCardIMG.src = nft.IMGPATH;   //large 600 size  //OTHER IMAGE TYPES HERE:
        // metaCardIMG.src = nft.image_url;   //large 600 size  //OTHER IMAGE TYPES HERE:
        // metaCardIMG.src = nft.image_original_url; //giant original size
        // metaCardIMG.src = nft.image_preview_url;      //medium 350 size
        // metaCardIMG.src = nft.image_thumbnail_url;   //small 200 size

        // debugger;
        let metaCardVID = null;
        let metaCardVIDBTN = null;
        if(nft.VIDPATH){ //SOUND-FLAG, render AUDIO-DISPLAY
            metaCardVID = document.createElement('video'); //MP3
            metaCardVID.src = nft.VIDPATH; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // metaCardVID.src = nft.meta.main.vid; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // metaCardVID.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            metaCardVID.style.padding = "0.888em"
            metaCardVID.style.width = "100%"
            metaCardVID.style.maxWidth = "33em"
            metaCardVID.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
            metaCardVID.style.borderRadius = "6.666px"
            metaCardVID.style.marginBottom = "1em"
            // metaCardVID.style.maxHeight = "55px"
            metaCardVID.controls = true;
            metaCardVID.style.display = 'none';
            // metaCardIMG = null; //do not show meta card default
            metaCardVIDBTN = document.createElement('section')
            metaCardVIDBTN.innerHTML = `<div class="hoverGlowPlay" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;">
                <i class="fas fa-play" style="font-size:2em;color:white;border:1px solid skyblue;border-radius:100%;padding:0.2em;"></i>
                </div>`
            // metaCardVIDBTN.style.cssText = "background: none; border: 0px;"
            // metaCardVIDBTN.style.zIndex = "10"
            metaCardVIDBTN.style.display = 'flex';
            metaCardVIDBTN.style.marginTop = "-5em";
            metaCardVIDBTN.style.marginLeft = "1em";
            // metaCardVIDBTN.style.backgroundColor = "grey";
            metaCardVIDBTN.style.borderRadius = "100%";
            metaCardVIDBTN.addEventListener("click", ()=> {
                let vidz = document.getElementsByTagName('video') //stop all other vids
                for(vid of vidz){ vid.pause() }
                metaCardVIDBTN.style.display = 'none';
                // metaCardIMG.style.display = 'none'
                metaCardIMG.style.cssText = 'height:12em;width:auto'
                metaCardVID.style.display = '';
                metaCardVID.play();
            })
            // metaCardVIDBTN.classList.add("hoverGlowPlay");
        }


        let metaCardSND = null;
        if(nft.SONICPATH){ //SOUND-FLAG, render AUDIO-DISPLAY
            metaCardSND = document.createElement('video'); //MP3
            metaCardSND.src = nft.SONICPATH; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // metaCardSND.src = nft.meta.main.snd; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // metaCardSND.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            metaCardSND.style.padding = "0.888em"
            metaCardSND.style.width = "100%"
            metaCardSND.style.maxWidth = "28em"
            metaCardSND.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
            metaCardSND.style.borderRadius = "6.666px"
            metaCardSND.style.marginBottom = "1em"
            metaCardSND.style.maxHeight = "55px"
            metaCardSND.controls = true;
        }
        // let metaCardLINK = document.createElement('a'); //IMG LINK parent
        // metaCard.src = nft.url
        //MAINTITLE
        let metaCardMainTitle = document.createElement('section'); //Title 1
        metaCardMainTitle.style.padding = "0.444em"
        metaCardMainTitle.style.borderRadius = "13px"
        metaCardMainTitle.style.border = "1px solid steelblue"
        metaCardMainTitle.innerText = nft.id; //NAME
        metaCardMainTitle.style.backgroundColor = "#05112a"
        //SUBTITLE
        let metaCardSubTitle = document.createElement('section'); //Title 2
        metaCardSubTitle.style.padding = "0.111em"
        metaCardSubTitle.style.textShadow = "1px 2px 1px black";
        metaCardSubTitle.style.display = "flex";
        metaCardSubTitle.style.justifyContent = "space-between";
        //THREE-PART-SUB-TITLE
        let BR = document.createElement('aside'); //sub
        let DWN = document.createElement('aside'); //sub
        let BL = document.createElement('aside'); //sub
        BR.innerHTML = "<span>\\</span>"
        // BR.innerHTML = `<span>${getIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
        DWN.innerHTML = "<span>~</span>"
        BL.innerHTML = "<span>2021</span>"

        //SUPERTITLE
        let metaCardSuperTitle = document.createElement('section'); //Title 2
        metaCardSuperTitle.style.padding = "0.111em"
        metaCardSuperTitle.style.textShadow = "1px 2px 1px black";
        metaCardSuperTitle.style.display = "flex";
        metaCardSuperTitle.style.justifyContent = "space-between";
        metaCardSuperTitle.style.marginTop =  "-0.444em";
        metaCardSuperTitle.style.paddingBottom = "0.888em";
        //THREE-PART-SUPER-TITLE
        let TR = document.createElement('aside'); //super
        let UP = document.createElement('aside'); //super
        let TL = document.createElement('aside'); //super
        TR.innerHTML = "<span>\\</span>"
        UP.innerHTML = `<span>${nft.id}</span>`
        TL.innerHTML = "<span>2021</span>"

        //INSERT INTO DOM-.
        if (metaCard && metaCardVID) { metaCard.insertAdjacentElement('afterbegin', metaCardVID); }
        if (metaCard && metaCardSND) { metaCard.insertAdjacentElement('afterbegin', metaCardSND); }
        if (metaCard && metaCardVIDBTN) { metaCard.insertAdjacentElement('afterbegin', metaCardVIDBTN); }
        if (metaCard && metaCardIMG) { metaCard.insertAdjacentElement('afterbegin', metaCardIMG); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',TR); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',UP); }
        if (metaCardSuperTitle) { metaCardSuperTitle.insertAdjacentElement('beforeend',TL); }
        if (metaCard) { metaCard.insertAdjacentElement('afterbegin',metaCardSuperTitle); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',BL); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',DWN); }
        if (metaCardSubTitle) { metaCardSubTitle.insertAdjacentElement('beforeend',BR); }
        if (metaCard) { metaCard.insertAdjacentElement('beforeend',metaCardMainTitle); }
        if (metaCard) { metaCard.insertAdjacentElement('beforeend',metaCardSubTitle); }
        if (metaFrame && metaCard) { metaFrame.insertAdjacentElement('beforeend', metaCard); }
        if (nftDisplay1) { nftDisplay1.insertAdjacentElement('beforeend', metaFrame); }
    } //END CREATE META CARD

let viz = {
 create_META_VIEW:create_META_VIEW,
 create_Dynamic_TTL:create_Dynamic_TTL,
 createKRYPTO_INTRO:createKRYPTO_INTRO,
 createKRYPTO_OUTRO:createKRYPTO_OUTRO,
 createKRYPTO_PAGE:createKRYPTO_PAGE,
 getRandoColor:getRandoColor
}

export { viz };


