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

import { viz } from "./kryptoviz.js";

// let mainView = null;
// const loginButton = document.getElementById('loginBtn')
// const nftDisplay1 = document.getElementById('nftDisplay1')
let nftDisplay1; //TODO move these to ui.nftDisplay
let KRYPTOBOOKFrame1;// = document.getElementById('KRYPTOBOOKFrame1')
let sonics = {};
// const statusDisplay1 = document.getElementById('statusDisplay1')
class MainVw {
    constructor(account){
        this.userAccount = account;
        this.eth = window.ethereum;
        this.wurldz = 0x46f3397433384f2e31262596642c811929d6c069;  //virtua wurldz opensea collection
        this.contract = 0x495f947276749Ce646f68AC8c248420045cb7b5e; //contract address for doc cozmo NFT
        this.tokenId = 32091639769859466206787752406743660124435242419967811135209154768441297600513  //doc cozmo
        this.creator = 0x5b3256965e7C3cF26E11FCAf296DfC8807C01073; //spazefalcon
        this.txnHash = 0x7d0512fa5e19d2d775bb55efe9b5e9960cc59f9c67c627b1f5eb22a5749162f2; //creator transaction hash
        this.idx = null; //use for singular content
    }
}


/***************************************************************************************************\
 * METANET_LOCAL: if provider or IPFS have nothing, show LOCAL DATA - : )
\***************************************************************************************************/  
// const METANET_LOCAL_DEFAULT = { //local data
//     cardz:[ {PATH:'./copyrightNetCinematics/KRYPTOCARDZ', START:1, STOP:2} //enumerable load-.
//     ], bitz:[], vidz:[], sonicz:[], spaze:[], botzity:[] 
// };


function initPage(){
    nftDisplay1 = document.getElementById('nftDisplay1')
    KRYPTOBOOKFrame1 = document.getElementById('KRYPTOBOOKFrame1')
/***************************************************************************************************\
 * META - ability for page to override and change dynamically-. - : )
\***************************************************************************************************/
/***************************************************************************************************\
 * GETDATA - all types of data requestFunctions here-. - : )
\***************************************************************************************************/
    function runDISPLAYFactory(mode, bID){ //NOTE: {mode = 1} //gallery; {mode = 7} //kryptobook
        console.log("TEST:",mode,bID)
        try{ 
            if (ui.onGalleryView) {ui.onGalleryView = false}
            if (ui.topMenuFrame) { ui.topMenuFrame.style.display = 'none'; }
            if (nftDisplay1) { nftDisplay1.style.display = 'none'; }
            if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.style.display = 'none'; }
            // if (nftDisplay1) { nftDisplay1.innerHTML = ""; } //BLANK data view-.
            // if (KRYPTOBOOKFrame1) { KRYPTOBOOKFrame1.innerHTML = ""; } //BLANK data view-.
            scrollToTop();
            if(mode===1){// gallery
                clearAllDisplays();
                if (ui.GalleryDISPLAYFRAME1) {ui.onGalleryView = true; 
                    ui.GalleryDISPLAYFRAME1.style.display = 'block'; }
                if (ui.topMenuFrame) { ui.topMenuFrame.style.display = 'block'; }
            } 
            if(mode===2){  //cardz
                //generate IMG PATH dynamically with ENUM.
                let cardzENUM = {PATH:'./copyrightNetCinematics/KRYPTOCARDZ', START:0, STOP:10}
                let cardzMetaNet = [];
                for ( let i=cardzENUM.START; i<=cardzENUM.STOP; i++ ){
                    cardzMetaNet.push({id:i,IMGPATH:`${cardzENUM.PATH}/num${i}.png`})
                }
                viz.create_Dynamic_TTL('COZMOCARDZ',ui.nftDisplay1);
                for(let card of cardzMetaNet){
                    viz.create_META_VIEW(card);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
            } else 
            if(mode===3){  //bitz
                viz.create_Dynamic_TTL('KRYPTOBITZ',ui.nftDisplay1);
                let bitzMetaNet = [];
                let bitzENUM = {PATH:'./copyrightNetCinematics/KRYPTOBITZ/set002', START:1, STOP:22}
                for ( let i=bitzENUM.START; i<=bitzENUM.STOP; i++ ){
                    bitzMetaNet.push({id:i,IMGPATH:`${bitzENUM.PATH}/${i}.png`})
                }
                for(let bit of bitzMetaNet){
                    viz.create_META_VIEW(bit);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 

            } else 
            if(mode===4){  //sonicz
                viz.create_Dynamic_TTL('KRYPTOSONICZ',ui.nftDisplay1);
                //generate PATH dynamically with ENUM.
                let soniczENUM = {START:1, STOP:2,PATH:'./copyrightNetCinematics/KRYPTOSONICZ' }
                let soniczMetaNet = [];
                for ( let i=soniczENUM.START; i<=soniczENUM.STOP; i++ ){
                    soniczMetaNet.push(
                        {id:i, IMGPATH:`${soniczENUM.PATH}/img${i}.png`,
                          SONICPATH:`${soniczENUM.PATH}/sonic${i}.mp3`
                        }
                    );
                }
                for(let sonic of soniczMetaNet){
                    viz.create_META_VIEW(sonic);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
            } else 
            if(mode===5){  //vidz
                viz.create_Dynamic_TTL('KRYPTOVIDZ',ui.nftDisplay1);
                let vidzENUM = {START:1, STOP:6,PATH:'./copyrightNetCinematics/KRYPTOVIDZ' }
                let vidzMetaNet = [];
                for ( let i=vidzENUM.START; i<=vidzENUM.STOP; i++ ){
                    vidzMetaNet.push(
                        {id:i, IMGPATH:`${vidzENUM.PATH}/img${i}.png`
                        ,
                          VIDPATH:`${vidzENUM.PATH}/vid${i}.mp4`
                        }
                    );
                }
                for(let vid of vidzMetaNet){
                    viz.create_META_VIEW(vid);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
            } else 
            if(mode===6 || mode===12){ //DISPLAY ALL-.
                //****************************************************************************
                let getNFTbyContractAndToken={  //GETNFT by Contract and tokenId.
                    assetContractAddr:"0x495f947276749Ce646f68AC8c248420045cb7b5e", 
                    tokenId:"32091639769859466206787752406743660124435242419967811135209154768441297600513"}
                // getNFT(getNFTbyContractAndToken)
                //****************************************************************************
                let getNFTSbyOwner={  //GETNFTS by Owner. - PLURAL NFTZ MULTIPLE!
                    owner:"0x46f3397433384f2e31262596642c811929d6c069"}
                getNFTs(getNFTSbyOwner.owner)
                //*********************************************************//OpenSea API : getNFTs (multiple) 
                let getNFTCollectionsbyOwner={  //GETNFT Collections by Owner. - PLURAL COLLECTIONZ MULTIPLE!    
                    owner:"0x46f3397433384f2e31262596642c811929d6c069"}   
                getNFTCollections(getNFTCollectionsbyOwner.owner)
            //***********************KRYPTOBOOKZ*****************************************************
            } else if (mode === 7){ //RENDER KRYPTOBOOK!!!
                KRYPTOBOOKFrame1.style.display = 'block';
                getKRYPTOBOOKZ(bID);

                nftDisplay1.style.display = 'none';
                KRYPTOBOOKFrame1.style.display = 'block';
                if (ui.GalleryDISPLAYFRAME1) { ui.GalleryDISPLAYFRAME1.style.display = 'none'; } 
            }
        //****************************************************************************
        // }); //END: GETNFT button click-.
        }catch(e){
            // statusDisplay1.innerHTML = "ERROR"+" no signal."; //e.message;
        }
    } MainVw.runDISPLAYFactory = runDISPLAYFactory; //Connect to main scope-.

/***************************************************************************************************\
 * METADATA - OVERRIDE : Populate META by ID lookup, then override LINKS and other behaviors. - : )
\***************************************************************************************************/  
const METANET = { //ATTRIBUTE OVERRIDES BY TOKEN ID, 
    // '42606445':{TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}}
    '42606445':{main:{snd:1},TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '42182031':{main:{snd:1},TR:'#1',UP:'SONICZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '32493286':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '24294536':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '23184401':{main:{vid:1},TR:'#1',UP:'VIDZ',TL:'2021',BL:'/',DWN:'DWN',BR:{url:'https://opensea.io/accounts/kryptospaze'}},
    '22885283':{main:{vid:1},idx:{id:32493286,t_id:'32091639769859466206787752406743660124435242419967811135209154757446181322753',a_c_address:'0x495f947276749ce646f68ac8c248420045cb7b5e'}},
    '80447251':{ idx:{id:80447251,t_id:'32091639769859466206787752406743660124435242419967811135209154770640320856065',a_c_address:'0x495f947276749Ce646f68AC8c248420045cb7b5e'}},
};

/***************************************************************************************************\
 * HIDEDATA or OVERRIDEDATA - use tgt keys to HIDE items here-. Or change them. - : )
\***************************************************************************************************/
    let HIDENFTTGTs = [{key:'id',tgt:'268592'},{key:'id',tgt:'91019'}] //TODO move to METAFACTORY
    let HIDECOLLECTIONTGTs = [{key:'image_url',tgt:'https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60'}] 


/***************************************************************************************************\
 * UTILITY - all types of helperFunctions here-. - : )
\***************************************************************************************************/
   //todo deletable? improve?
    function getIconLink(node, url){
        node.style.marginTop = "-1em";
        return node.innerHTML=`<a href="${url}" target="_blank"><img src="../images/osblue.png" class="hoverGlow" style="width:2em;border-radius:100%;"/></a>`          
    }

    function getKRYPTOBOOKZ(bID){
      
        //METANET_bID_to_BOOKZ_lookup
        let METANET_BOOKZ = {
            's1.e1.ch1':SPAZEBOOK_KRYPTOBITZ1, 
            's1.e1.ch2':SPAZEBOOK_KRYPTOBITZ1, 
        }
        let aBOOK = METANET_BOOKZ[bID];
        //TODO - CONNECT BOOK-ID to SPAZEBOOK-KRYPTOBITZ!!!
        // showKRYPTOBOOK_All(SPAZEBOOK_KRYPTOBITZ1, [])
        showKRYPTOBOOK_All(aBOOK, [])
    }

}  //END MASSIVE INITPAGE FN. //todo move above krypto fns?

let SPAZEBOOK_IDX = 0;
let SPAZEBOOK_KRYPTOBITZ1 = [
    {IDX:'1.0',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_TITLEBIT1.png"},
    {IDX:'1.1',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.1_laundry1.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.1_laundry_5x4_TXT.png"},
    {IDX:'1.2',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.2_spazebot1.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.2_spazebot_5x4_TXT.png"},
    {IDX:'1.3',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.3_spazewarz1.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.3_spazewarz_5x4_TXT.png"},
    {IDX:'1.3.1',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.3.1_orbyzoomout2.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.3.1_marzamoon_5x4TXT.png"
    },
    {IDX:'1.4',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.4_chargeit4.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.4_myheart_5x4_TXT.png"},
    {IDX:'1.4.1',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.4.1_recharg3.png"},
    {IDX:'1.5',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.5_spazeboard2.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.5_spazeboard_5x4_TXT.png"},
    {IDX:'1.6',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.6_mombot1.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.6_mombot_5x4_TXT.png"},
    {IDX:'1.7',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_IMGBIT1.7_brokenheart2.png",
     TXT:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_bit1.7_brokenheart_5x4_TXT.png"},
    {IDX:'1.8',
     IMG:"./copyrightNetCinematics/2022_ORIGINZ_BITZ/originz_ENDBIT1.png"},
]

function nextPage(){

    //is it loaded or not? 
    let renderedBitz = document.getElementsByClassName("bit-item")
    if(SPAZEBOOK_IDX+1 === SPAZEBOOK_KRYPTOBITZ1.length){return;}
    // let nextIDX = (SPAZEBOOK_IDX+1 === renderedBitz.length) ? ++SPAZEBOOK_IDX: SPAZEBOOK_IDX = renderedBitz.length -1;
    if(SPAZEBOOK_IDX+1 === renderedBitz.length){ //CREATE NEW PAGE-.
        // showKRYPTO_Page(nextIDX,SPAZEBOOK_KRYPTOBITZ1); //ADD PAGE.
        showKRYPTO_Page(++SPAZEBOOK_IDX,SPAZEBOOK_KRYPTOBITZ1); //ADD PAGE.
        setTimeout(function(){
            //SCROLL TGT IDX, RESPONSIVE to SCREEN WIDTH
            let nextIDX = null;
            if(document.body.clientWidth < 600){
                nextIDX = 'Spacer_' + SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            } else {
                nextIDX = SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            }
            console.log("IDX",nextIDX)
            document.getElementById(nextIDX).scrollIntoView({ behavior: 'smooth' });
        },222)
    } else { //SHOW NEXT PAGE
        let nextIDX = SPAZEBOOK_KRYPTOBITZ1[++SPAZEBOOK_IDX].IDX
        setTimeout(function(){
            //SCROLL TGT IDX, RESPONSIVE to SCREEN WIDTH
            if(document.body.clientWidth < 600){
                nextIDX = 'Spacer_' + SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX
            }           
            if(nextIDX){
                document.getElementById(nextIDX).scrollIntoView({ behavior: 'smooth' });
            }
            // document.querySelector('#'+nextIDX).scrollIntoView({ behavior: 'smooth' });
        },222)
    }
    updatePageState();
}


function lastPage(){ //use current idx to get last item.
    if(SPAZEBOOK_IDX === 0){return;}
    --SPAZEBOOK_IDX;
    updatePageState();
    // if(lastPageIDX <= 0){//grey out LASTBTN
    //     let lastBtn = document.querySelector('#mainUPBTN');
    //     lastBtn.classList.remove("disabledBTN");
    //     return; //no action
    // }
    // let lastPageIDX = SPAZEBOOK_IDX - 1;
    let lastID = SPAZEBOOK_KRYPTOBITZ1[SPAZEBOOK_IDX].IDX;//.replace('.','-');
    if(document.body.clientWidth < 600){ lastID = "Spacer_"+lastID}
    if(SPAZEBOOK_IDX === 0){ lastID = "pageTitle"} // top page, not top item.
    if(lastID){
        setTimeout(function(){
            document.getElementById(lastID).scrollIntoView({ behavior: 'smooth' });
        },800)
    }
}
let EVENT_STARTED = 0;
let EVENT_THE_END = 0;
function updatePageState(){ // grey page btns,
    EVENT_STARTED += 1;
    if(EVENT_STARTED >= 1 && EVENT_THE_END===0){
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "20%"; //POSITION APRON below
    } else {
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "0";  //REMOVE APRON below      
    }
    //LAST BTN
    if(SPAZEBOOK_IDX <= 0){ //DISABLE UP ARROW-.
        ui.mainUPBTN.classList.add("disabledBTN");
    }else{ //ENABLE UP ARROW.
        ui.mainUPBTN.classList.remove("disabledBTN");
    }

    //DISABLE DOWN ARROW
    if(SPAZEBOOK_IDX + 1 >= SPAZEBOOK_KRYPTOBITZ1.length){
        EVENT_THE_END = 1;
        ui.mainDWNBTN.classList.add("disabledBTN"); //DISABLE AT "THE END"
    }else{
        ui.mainDWNBTN.classList.remove("disabledBTN");
    }

    if(EVENT_THE_END){
        let tFrame = document.getElementById('subTitleFrame')
        tFrame.style.marginTop = "0";   
        ui.mainDWNBTN.classList.remove("glowBTN");
    } else if (SPAZEBOOK_IDX + 1 <= SPAZEBOOK_KRYPTOBITZ1.length){
        ui.mainDWNBTN.classList.remove("glowBTN");
        setTimeout(function(){
            if(!EVENT_THE_END){
                ui.mainDWNBTN.classList.add("glowBTN");
            }else {
                ui.mainDWNBTN.classList.remove("glowBTN"); 
            }
        },8888)
    } else {
        ui.mainDWNBTN.classList.remove("glowBTN");
    }

    //Set PAGE NUMBER
    // ui.mainPageNums.innerHTML = `${SPAZEBOOK_IDX+1} of ${SPAZEBOOK_KRYPTOBITZ1.length}`


}
//TODO rename to showKRYPTO_Page
// function showKRYPTOBOOK(idx, data){
function showKRYPTO_Page(idx, data){
    viz.createKRYPTO_PAGE(data[idx]); //createMETACARD(nft)
}

/*********************************************************************\
 * SHOW KRYPTO BOOK ALL
 \********************************************************************/
function showKRYPTOBOOK_All(bitz, metanet1){
    //TODO this is the layer for 9GRID Integration (links visibility behavior, etc)
    //TODO that, make the showBitz config object a wrapper around the contentBitz.
    //TODO then, extend the IDX to pinata IPFS lookup of METANET obj.
    let showbitz = {}
    //TODO solve IMGNOTXT and INTROBITZ TITLEBITZ and ENDBITZ and OUTROBITZ
    //TODO SOLVE spacer "welcome" and 1|10 10|10
    //TODO metanet has showbitz


//TODO TITLE???
{/* <header  style="padding:0.666em;">
    <section style="margin: 0.222em;">
        <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">KRYPTOBOOKZ</span><span class="tradeMark">&trade;</span>
    </section>
</header> */}




    //Loop all the pages and render free scroll...
    for(let i=0; i<bitz.length;i++){

        if(i===0){ //intro
            viz.createKRYPTO_INTRO(bitz[i]); //intro
        } else {
            setTimeout(function(){ //DELAY-RENDER-.
                if(i==bitz.length-1){ //outro
                    //SUPER COOL! this is after end page click! TODO: Hide stuff here. ~ : )
                    viz.createKRYPTO_OUTRO(bitz[i]); 
                } else{
                    viz.createKRYPTO_PAGE(bitz[i],i,bitz.length-1); //page
                }
            }, i*1000 + 4444 ) //DELAY-RENDER exponent
        }
    }

}

let audio_IDX = 0;
function toggleSound(toggleOn){
    if(toggleOn){
        audio_IDX++;
        if(audio_IDX%2===0){
            sonics.track2.play();
        } else {
            sonics.track1.play();
        }
    } else {
        sonics.track1.pause();
        sonics.track1.currentTime = 0;
        sonics.track2.pause();
        sonics.track2.currentTime = 0;
        // sonics.track1.stop();
        // sonics.track2.stop();
    }
}
function loadGalleryView(){ //
    let galleryITEMS = [
        {sNUM:'S1',eNUM:'EP2',mainTTL:'TRIAL of OrbyOrbot',subTTL:'MomBot, I fail you.',info:'made in Dreams',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/img0.png',
          LINKPATH:'s1.e1.ch1',
          INFO:'buncha stuff, buncha buncha stuff'},
        {sNUM:'S1',eNUM:'EP1',mainTTL:'ORBOT~ORIGINZ',subTTL:'Go find your Dad for me!',info:'made in Dreams',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/originz_TITLEBIT1.png',
          LINKPATH:'s1.e1.ch1',
          INFO:'buncha stuff, buncha buncha stuff'},
        {sNUM:'S2',eNUM:'EP3',mainTTL:'Search NORTH~CRATER~LAKE',subTTL:'THE SPAZECRASH!!!',info:'made in VR',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/img3.png',
          LINKPATH:'s1.e1.ch1',
          INFO:'buncha stuff, buncha buncha stuff'},
        {sNUM:'S2',eNUM:'EP6',mainTTL:'Lost in EAST~DUNE~SEA',subTTL:'BadBUGZ!?!',info:'made in Dreams',
          IMGPATH:'copyrightNetCinematics/MAIN_GALLERY/img6.png',
          LINKPATH:'s1.e1.ch1',
          INFO:'buncha stuff, buncha buncha stuff'},
    ];
    
    ui.GalleryDISPLAYFRAME1.innerHTML = '';
    let galleryITEM = {};
    let galleryViewMarkup=`
        <header id="pageTitle" style="padding:0.666em;">
            <section style="margin: 0.222em;">
                <span class="pageTitleTXT" style=" text-shadow: 6px 1px 14px purple;">KRYPTOBOOKZ</span><span class="tradeMark">&trade;</span>
            </section>
        </header>
    `;
    for(let i=0; i<galleryITEMS.length;i++){
        galleryITEM = galleryITEMS[i];
        galleryViewMarkup += `
            <article id='gID${i}' class='galleryItemFrame'>
                <img class='mainGalleryIMG' src= ${galleryITEM.IMGPATH}
                    onclick='galleryBOOKClick(event)' />
                <section class='galleryINFO_Frame' onclick='galleryINFOClick(event)'>
                    <section class='galleryINFO_short'>
                        <span>${galleryITEM.sNUM}&nbsp;|&nbsp;${galleryITEM.mainTTL}</span><br>
                        <span>${galleryITEM.eNUM}&nbsp;|&nbsp;${galleryITEM.subTTL}</span><br>
                        <span>INFO:${galleryITEM.INFO}</span>
                    </section>
                    <section class='galleryINFO_long' style='display:none'>
                        <span>${galleryITEM.sNUM}&nbsp;|&nbsp;${galleryITEM.mainTTL}</span><br>
                        <span>${galleryITEM.eNUM}&nbsp;|&nbsp;${galleryITEM.subTTL}</span><br>
                        <span>INFO:${galleryITEM.INFO}</span>
                        <div onclick='galleryPlayClick(event,"${galleryITEM.LINKPATH}")' class="hoverGlowPlay" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;
                            width:2em;height:2em;margin: 0 auto;margin-right: 0;">
                        <i class="fas fa-play" style="font-size:1em;color:white;border-radius:100%;"></i>
                        </div>
                    </section>
                </section>

                <hr>
            </article>
        `;
    }
    ui.GalleryDISPLAYFRAME1.innerHTML = galleryViewMarkup;
}

function initSonics(){
    // sonics.spaceWind3= new BABYLON.Sound("spaceWind3","./copyrightnetcinematics/sonicz/nxSpaceWind3.mp3", nx.scene, null, { loop: false, autoplay: false, volume:0.44 });
    sonics.track1 = new Audio("./copyrightNetCinematics/SONICS/track1.mp3");
    sonics.track2 = new Audio("./copyrightNetCinematics/SONICS/track2.mp3");
}

//IMPORTANT: INITIALIZE KRYPTOBOOKZ
let kbz = {
    viz:viz,
    sonics,sonics,
    MainVw:MainVw,
    initPage:initPage,
    initSonics:initSonics,
    loadGalleryView:loadGalleryView,
    nextPage:nextPage,
    lastPage:lastPage,
    toggleSound:toggleSound
}

export { kbz };


