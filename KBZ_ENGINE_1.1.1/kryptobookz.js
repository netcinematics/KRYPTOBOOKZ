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
let nftDisplay1;
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

function menuFn(e){ //ALL MENU BEHAVIOR in 1 FACTORY fn.
    switch (e.target.parentElement.id){
        case 'NavBtn1' : window.open("https://netcinematics.github.io/KRYPTOSPAZE/", '_blank'); break;
        case 'NavBtn2' : MainVw.getNFTFactory(2); break;
        case 'NavBtn3' : MainVw.getNFTFactory(3); break;
        case 'NavBtn4' : MainVw.getNFTFactory(4); break;
        case 'NavBtn5' : MainVw.getNFTFactory(5); break;
        case 'NavBtn6' : window.open("https://netcinematics.github.io/KRYPTOSPAZE/", '_blank'); break;
        case 'NavBtn7' : MainVw.getNFTFactory(2); break;
        case 'NavBtn8' : MainVw.getNFTFactory(3); break;
        case 'NavBtn9' : MainVw.getNFTFactory(4); break;
        case 'NavBtn10' : MainVw.getNFTFactory(5); break;
        case 'NavBtn11' : MainVw.getNFTFactory(11); break;
        case 'NavBtn12' : MainVw.getNFTFactory(12); break;
        default : return;
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
    function getNFTFactory(mode){ //NOTE: {mode = 7} //kryptobook
        // getNFTOpenSea(mode); //legacy
        // return;
        //GET LOCAL METANET.
        try{ 
            if (nftDisplay1) { nftDisplay1.innerHTML = ""; } //BLANK data view-.
            // if(MainVw.idx){ //load specific index item-.
            //     let keys = getNIFTYKeys(); //TODO rename -Search METANET, for SINGULAR LOOKUP-.
            //     if(!keys){mode=6;} //error, render all-.
            //     else{ //fetch singular NFT by idx
            //         fetch(`https://api.opensea.io/api/v1/asset/${keys.a_c_a}/${keys.t_id}/`,{method: 'GET'})
            //         .then(response => response.json())
            //         .then((data) => { debugger; console.log(data);
            //             showNFTs([data]) //singular item-.
            //         })
            //         .catch(err => console.error(err));
            //         return; //end nav handling-.
            //     }
            // } 
            //mode 1 - get TITLE PAGE 
            if(mode===2){  //cardz
                //generate IMG PATH dynamically with ENUM.
                let cardzENUM = {PATH:'./copyrightNetCinematics/KRYPTOCARDZ', START:0, STOP:10}
                let cardzMetaNet = [];
                for ( let i=cardzENUM.START; i<=cardzENUM.STOP; i++ ){
                    cardzMetaNet.push({id:i,IMGPATH:`${cardzENUM.PATH}/num${i}.png`})
                }
                for(let card of cardzMetaNet){
                    viz.create_META_VIEW(card);
                }//ENUM LOAD
                nftDisplay1.style.display = 'block';
                KRYPTOBOOKFrame1.style.display = 'none';
                // viz.createCARDZ_VIEW(cardzMetaNet); //ENUM LOAD
                // viz.createCARDZ_VIEW(METANET_LOCAL_DEFAULT.cardz); //ENUM LOAD
                // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmocardz',{method: 'GET'})
                //     .then(response => response.json())
                //     .then((data) => { //debugger; console.log(data);
                //         showNFTs(data.assets)
                //     })
                //     .catch(err => { 
                //         showNFTs(METANET_LOCAL)
                //         console.error(err)
                //     });
            } else 
            if(mode===3){  //heroz

                //just lukkee dargon
                // fetch('https://api.opensea.io/api/v1/asset/0x495f947276749Ce646f68AC8c248420045cb7b5e/32091639769859466206787752406743660124435242419967811135209154770640320856065/',{method: 'GET'})
                // .then(response => response.json())
                // .then((data) => { //debugger; console.log(data);
                //         showNFTs([data])
                //     })
                // .catch(err => console.error(err));

            } else 
            if(mode===4){  //sonicz
                debugger;
                //generate IMG PATH dynamically with ENUM.
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



                // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmosonicz',{method: 'GET'})
                //     .then(response => response.json())
                //     .then((data) => { //debugger; console.log(data);
                //         showNFTs(data.assets)
                //     })
                //     .catch(err => console.error(err));
            } else 
            if(mode===5){  //vidz
                    // fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmospaze',{method: 'GET'})
                    // .then(response => response.json())
                    // .then((data) => { //debugger; console.log(data);
                    //     showNFTs(data.assets)
                    // })
                    // .catch(err => console.error(err));
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
            getKRYPTOBOOKZ();
        }
        //****************************************************************************
        // }); //END: GETNFT button click-.
        }catch(e){
            // statusDisplay1.innerHTML = "ERROR"+" no signal."; //e.message;
        }
    } MainVw.getNFTFactory = getNFTFactory; //Connect to main scope-.

    function getNFTOpenSea ( mode){ //todo this may be retired
        try{ 
            if (nftDisplay1) { nftDisplay1.innerHTML = ""; } //BLANK data view-.
            if(MainVw.idx){ //load specific index item-.
                let keys = getNIFTYKeys(); //TODO rename -Search METANET, for SINGULAR LOOKUP-.
                if(!keys){mode=6;} //error, render all-.
                else{ //fetch singular NFT by idx
                    fetch(`https://api.opensea.io/api/v1/asset/${keys.a_c_a}/${keys.t_id}/`,{method: 'GET'})
                    .then(response => response.json())
                    .then((data) => { debugger; console.log(data);
                        showNFTs([data]) //singular item-.
                    })
                    .catch(err => console.error(err));
                    return; //end nav handling-.
                }
            } 
            if(mode===2){  //cardz
                fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmocardz',{method: 'GET'})
                    .then(response => response.json())
                    .then((data) => { //debugger; console.log(data);
                        showNFTs(data.assets)
                    })
                    .catch(err => console.error(err));
            } else 
            if(mode===3){  //heroz

                //just lukkee dargon
                fetch('https://api.opensea.io/api/v1/asset/0x495f947276749Ce646f68AC8c248420045cb7b5e/32091639769859466206787752406743660124435242419967811135209154770640320856065/',{method: 'GET'})
                .then(response => response.json())
                .then((data) => { //debugger; console.log(data);
                        showNFTs([data])
                    })
                .catch(err => console.error(err));
                // fetch('https://api.opensea.io/api/v1/assets?token_ids=32091639769859466206787752406743660124435242419967811135209154760744716206081&order_direction=desc&offset=0&limit=20',{method: 'GET'})
                // .then(response => response.json())                    
                // .then((data) => { //debugger; console.log(data);
                //         showNFTs(data.assets)
                //     })
                // .catch(err => console.error(err));

                // fetch('https://api.opensea.io/api/v1/assets?token_ids=32091639769859466206787752406743660124435242419967811135209154750849111556097&order_direction=desc&offset=0&limit=20',{method: 'GET'})
                // .then(response => response.json())                    
                // .then((data) => { //debugger; console.log(data);
                //         showNFTs(data.assets)
                //     })
                // .catch(err => console.error(err));




            } else 
            if(mode===4){  //jamz
                fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmosonicz',{method: 'GET'})
                    .then(response => response.json())
                    .then((data) => { //debugger; console.log(data);
                        showNFTs(data.assets)
                    })
                    .catch(err => console.error(err));
            } else 
            if(mode===5){  //vidz
                    fetch('https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=20&collection=cozmospaze',{method: 'GET'})
                    .then(response => response.json())
                    .then((data) => { //debugger; console.log(data);
                        showNFTs(data.assets)
                    })
                    .catch(err => console.error(err));
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
            getKRYPTOBOOKZ();
        }
        //****************************************************************************
        // }); //END: GETNFT button click-.
        }catch(e){
            // statusDisplay1.innerHTML = "ERROR"+" no signal."; //e.message;
        }
        

    } //END



     function getNFT(nftFactory){ //todo retire
        // example:
        // let nftFactory={
        //     assetContractAddr:"0x495f947276749Ce646f68AC8c248420045cb7b5e",
        //     tokenId:"32091639769859466206787752406743660124435242419967811135209154768441297600513"}
        // OpenSea API: //https://api.opensea.io/api/v1/asset/{asset_contract_address}/{token_id}/
        fetch(`https://api.opensea.io/api/v1/asset/${nftFactory.assetContractAddr}/${nftFactory.tokenId}/`,{method:'GET'})
        .then(response => { return response.json() })
        .then(data => { console.log(data) })
        .catch(err => { debugger; console.error(err) });
        /* RETURN DATA : "SINGLE-NFT ASSET"
            EXAMPLE: https://docs.opensea.io/reference/retrieving-a-single-asset
         RETURN DATA */
     }
     function getNFTs(owner){
         //OpenSea API: fetch('https://api.opensea.io/api/v1/assets?owner={ownerAddress}&order_direction=desc&offset=0&limit=20', options)
        fetch(`https://api.opensea.io/api/v1/assets?owner=${owner}&order_direction=desc&offset=0&limit=20`,{method: 'GET'})
        .then(response => { return response.json() })
        .then((data) => { //debugger; console.log(data);
            showNFTs(data.assets)
        })
        .catch(err => {debugger; console.error(err)});
        /* RETURN DATA : "MULTIPLE NFT - ASSETS"
            EXAMPLE: https://docs.opensea.io/reference/getting-assets
         RETURN DATA */
    }
    function getNFTCollections(owner){
         //OpenSea API: fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300',{method: 'GET'})
        fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${owner}&offset=0&limit=300`,{method: 'GET'})
        .then(response => response.json())
        .then((collections) => { //debugger; //console.log(collections);
            showNFTCollections(collections)
        })
        .catch(err => {debugger; console.error(err)});    
         /* RETURN DATA : "COLLECTIONS" 
            EXAMPLE: https://docs.opensea.io/reference/retrieving-collections
          RETURN DATA   */ 
    }
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

function setMETA(nft){ //METANET lookup by ID. Set to meta on NFT.
    // let dupeCheck = null;
    // for(key in METANET){ for(tgt in METANET){ if(key===tgt){dupeCheck=1; break}} if(dupeCheck){console.log('DUPE IN METANET!',key); break}}
    if(nft.id && METANET[nft.id]){ nft.meta = METANET[nft.id];} //lookup nft id in the METANET.
    else{ return; } //not found
}  
//set meta data onto token nft of matching id, to configure super and sub titles.
function initNIFTY(nft){
    //--IFRAME - CRYPTO.
     //HYPER_META_SEQUENCING_SYSTEM-. OVERVIEW:
     //--initialize NIFTY~GALLERY display settings
     //--initialize CARD display settings
     //--initialize IMAGE display settings
     //--initialize HIDDEN displays
     //--initialize SOUND display settings
     //--initialize VIDEO display settings
     //--initialize MINT DATE display
     //--initialize PERMLINK btn
     //--initialize GAME display settings
     //--initialize TEXT display
     //----------------------------------------------
     //--initialize SOUND settings
    if(!nft || !nft.meta){return;} //inversion error trap, clean up code above, in factory.
    // if(nft.idx){debugger;}
    if(nft.meta.main){ // MAIN - meta configurations
        if(nft.meta.main.snd===1){ //lookup nft data, for meta display
            nft.meta.main.snd = nft.animation_url;
            // animation_original_url: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // animation_url: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
            // permalink: "https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/32091639769859466206787752406743660124435242419967811135209154766242274344961"
        } else 
        if(nft.meta.main.vid){
            nft.meta.main.vid = nft.animation_url; //signal meta display
        }
    }
}
//todo rename to searchMETANET
function getNIFTYKeys(){ //search METANET for idx keys for OpenSea individual lookup.
    let idxTGT = (METANET[MainVw.idx]) ? METANET[MainVw.idx].idx : null;
    if(idxTGT){ 
        return{t_id : idxTGT.t_id, a_c_a : idxTGT.a_c_address}
    }
    return false;
}
/***************************************************************************************************\
 * HIDEDATA or OVERRIDEDATA - use tgt keys to HIDE items here-. Or change them. - : )
\***************************************************************************************************/
    let HIDENFTTGTs = [{key:'id',tgt:'268592'},{key:'id',tgt:'91019'}] //TODO move to METAFACTORY
    let HIDECOLLECTIONTGTs = [{key:'image_url',tgt:'https://lh3.googleusercontent.com/C272ZRW1RGGef9vKMePFSCeKc1Lw6U40wl9ofNVxzUxFdj84hH9xJRQNf-7wgs7W8qw8RWe-1ybKp-VKuU5D-tg=s60'}] 

/***************************************************************************************************\
 * SHOWDATA - all types of data displayFunctions here-. - : )
\***************************************************************************************************/
//todo remove to VIS
    function showNFTs(assets){ //debugger; //TODO switch by DISPLAY-FACTORY-. RENAME showNIFTYactory
        // let hidden = 0 //TODO : move this to initNIFTY()
        for(let nft of assets){ //console.log("displaying",nft.id)
            console.log("RENDER: ", nft.id, nft.name)
            setMETA(nft); ///set meta from metanet if found-.
            initNIFTY(nft) //nft.meta.main.snd = nft.animation_url; SND and VID URL
            if(nft.meta){ //
                if(nft.meta.main){
                    if(nft.meta.main.snd || nft.meta.main.vid){ 
                        createMETACARD(nft)
                    }
                }else{
                    createArtCard(nft)  //render single idx search for img (lukkee)
                }
            }
            else { createArtCard(nft) } //render cardz group imgs
            // else if(!hidden){ createArtCard(nft) }
        }       
    }
    function showNFTCollections(collections){ //debugger; //TODO switch by DISPLAY-FACTORY-.
        let hidden = 0
        for(let collection of collections){ //console.log("displaying",nft.id)
            hidden = 0; //console.log("HIDE ME",collection.name,collection.id)
            for(let item of HIDECOLLECTIONTGTs){
                if( collection[item.key].toString() === item.tgt ){  
                    console.log("hidden",item.tgt) //HIDE ITEM
                    hidden = 1;  break;
                } 
            }
            if(!hidden){ createTitleCard(collection) }
        }          
    }
    //todo put in vis - moved to create_META_VIEW
    // function createMETACARD(nft){
    //     //BUILD ARTCARD DISPLAY
    //     let artFrame = document.createElement('section');
    //     artFrame.style.backgroundColor = 'black';
    //     artFrame.style.borderRadius = "10px";
    //     artFrame.style.padding = "0.111em";
    //     artFrame.style.margin = "0.444em";
    //     let artCard = document.createElement('article');
    //     artCard.style.backgroundColor = viz.getRandoColor();
    //     artCard.style.border = "1px solid steelblue"
    //     artCard.style.borderRadius = "13.333px"
    //     artCard.style.padding = "0.888em"
    //     artCard.style.margin = "0.88em auto"
    //     artCard.style.maxWidth = "36em"
    //     //CARD IMG
    //     let artCardIMG = document.createElement('img'); //IMG
    //     artCardIMG.style.padding = "0.888em"
    //     artCardIMG.style.width = "88.8%"
    //     artCardIMG.style.maxWidth = "33em"
    //     artCardIMG.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
    //     artCardIMG.style.borderRadius = "6.666px"
    //     artCardIMG.style.marginBottom = "1em"
    //     artCardIMG.style.zIndex = "9"
    //     artCardIMG.src = nft.image_url;   //large 600 size  //OTHER IMAGE TYPES HERE:
    //     // artCardIMG.src = nft.image_original_url; //giant original size
    //     // artCardIMG.src = nft.image_preview_url;      //medium 350 size
    //     // artCardIMG.src = nft.image_thumbnail_url;   //small 200 size

    //     // debugger;
    //     let artCardVID = null;
    //     let artCardVIDBTN = null;
    //     if(nft.meta.main.vid){ //SOUND-FLAG, render AUDIO-DISPLAY
    //         artCardVID = document.createElement('video'); //MP3
    //         artCardVID.src = nft.meta.main.vid; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
    //         // artCardVID.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
    //         artCardVID.style.padding = "0.888em"
    //         artCardVID.style.width = "100%"
    //         artCardVID.style.maxWidth = "33em"
    //         artCardVID.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
    //         artCardVID.style.borderRadius = "6.666px"
    //         artCardVID.style.marginBottom = "1em"
    //         // artCardVID.style.maxHeight = "55px"
    //         artCardVID.controls = true;
    //         artCardVID.style.display = 'none';
    //         // artCardIMG = null; //do not show art card default
    //         artCardVIDBTN = document.createElement('section')
    //         artCardVIDBTN.innerHTML = `<div class="hoverGlowPlay" style="border-radius:100%; background:grey; padding: 0.444em;box-shadow:-2px 0px 2px 2px deepskyblue;">
    //             <i class="fas fa-play" style="font-size:2em;color:white;border:1px solid skyblue;border-radius:100%;padding:0.2em;"></i>
    //             </div>`
    //         // artCardVIDBTN.style.cssText = "background: none; border: 0px;"
    //         // artCardVIDBTN.style.zIndex = "10"
    //         artCardVIDBTN.style.display = 'flex';
    //         artCardVIDBTN.style.marginTop = "-5em";
    //         artCardVIDBTN.style.marginLeft = "1em";
    //         // artCardVIDBTN.style.backgroundColor = "grey";
    //         artCardVIDBTN.style.borderRadius = "100%";
    //         artCardVIDBTN.addEventListener("click", ()=> {
    //             let vidz = document.getElementsByTagName('video') //stop all other vids
    //             for(vid of vidz){ vid.pause() }
    //             artCardVIDBTN.style.display = 'none';
    //             // artCardIMG.style.display = 'none'
    //             artCardIMG.style.cssText = 'height:12em;width:auto'
    //             artCardVID.style.display = '';
    //             artCardVID.play();
    //         })
    //         // artCardVIDBTN.classList.add("hoverGlowPlay");

    //     }


    //     let artCardSND = null;
    //     if(nft.meta.main.snd){ //SOUND-FLAG, render AUDIO-DISPLAY
    //         artCardSND = document.createElement('video'); //MP3
    //         artCardSND.src = nft.meta.main.snd; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
    //         // artCardSND.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
    //         artCardSND.style.padding = "0.888em"
    //         artCardSND.style.width = "100%"
    //         artCardSND.style.maxWidth = "28em"
    //         artCardSND.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
    //         artCardSND.style.borderRadius = "6.666px"
    //         artCardSND.style.marginBottom = "1em"
    //         artCardSND.style.maxHeight = "55px"
    //         artCardSND.controls = true;
    //     }
    //     // let artCardLINK = document.createElement('a'); //IMG LINK parent
    //     // artCard.src = nft.url
    //     //MAINTITLE
    //     let artCardMainTitle = document.createElement('section'); //Title 1
    //     artCardMainTitle.style.padding = "0.444em"
    //     artCardMainTitle.style.borderRadius = "13px"
    //     artCardMainTitle.style.border = "1px solid steelblue"
    //     artCardMainTitle.innerText = nft.name; //NAME
    //     artCardMainTitle.style.backgroundColor = "#05112a"
    //     //SUBTITLE
    //     let artCardSubTitle = document.createElement('section'); //Title 2
    //     artCardSubTitle.style.padding = "0.111em"
    //     artCardSubTitle.style.textShadow = "1px 2px 1px black";
    //     artCardSubTitle.style.display = "flex";
    //     artCardSubTitle.style.justifyContent = "space-between";
    //     //THREE-PART-SUB-TITLE
    //     let BR = document.createElement('aside'); //sub
    //     let DWN = document.createElement('aside'); //sub
    //     let BL = document.createElement('aside'); //sub
    //     BR.innerHTML = "<span>\\</span>"
    //     BR.innerHTML = `<span>${getIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
    //     DWN.innerHTML = "<span>~</span>"
    //     BL.innerHTML = "<span>2021</span>"
    //     // setMETA(nft)

        
    //     // if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
    //     //     if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, {url: 'https://opensea.io/accounts/kryptospaze'}) : BR.innerHTML = nft.meta.BR}
    //     // }


    //     //SUPERTITLE
    //     let artCardSuperTitle = document.createElement('section'); //Title 2
    //     artCardSuperTitle.style.padding = "0.111em"
    //     artCardSuperTitle.style.textShadow = "1px 2px 1px black";
    //     artCardSuperTitle.style.display = "flex";
    //     artCardSuperTitle.style.justifyContent = "space-between";
    //     artCardSuperTitle.style.marginTop =  "-0.444em";
    //     artCardSuperTitle.style.paddingBottom = "0.888em";
    //     //THREE-PART-SUPER-TITLE
    //     let TR = document.createElement('aside'); //super
    //     let UP = document.createElement('aside'); //super
    //     let TL = document.createElement('aside'); //super
    //     TR.innerHTML = "<span>\\</span>"
    //     UP.innerHTML = `<span>${nft.id}</span>`
    //     TL.innerHTML = "<span>2021</span>"
    //     // debugger; //METACARD useMETA for display
        
    //     setMETA(nft)
    //     if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
    //         //for(nftLink of nft.meta) //TODO
    //         // if(nft.meta.TL){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TL.innerHTML = nft.meta.TL}
    //         // if(nft.meta.UP){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :UP.innerHTML = nft.meta.UP}
    //         // if(nft.meta.TR){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TR.innerHTML = nft.meta.TR}
    //         // if(nft.meta.BL) (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :{BL.innerHTML = nft.meta.BL}
    //         // if(nft.meta.DWN){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :DWN.innerHTML = nft.meta.DWN}
    //         if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, nft.meta.BR.url) : BR.innerHTML = nft.meta.BR}
    //     }
    //     //INSERT INTO DOM-.
    //     if (artCard && artCardVID) { artCard.insertAdjacentElement('afterbegin', artCardVID); }
    //     if (artCard && artCardSND) { artCard.insertAdjacentElement('afterbegin', artCardSND); }
    //     if (artCard && artCardVIDBTN) { artCard.insertAdjacentElement('afterbegin', artCardVIDBTN); }
    //     if (artCard && artCardIMG) { artCard.insertAdjacentElement('afterbegin', artCardIMG); }
    //     if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',TR); }
    //     if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',UP); }
    //     if (artCardSuperTitle) { artCardSuperTitle.insertAdjacentElement('beforeend',TL); }
    //     if (artCard) { artCard.insertAdjacentElement('afterbegin',artCardSuperTitle); }
    //     if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',BL); }
    //     if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',DWN); }
    //     if (artCardSubTitle) { artCardSubTitle.insertAdjacentElement('beforeend',BR); }
    //     if (artCard) { artCard.insertAdjacentElement('beforeend',artCardMainTitle); }
    //     if (artCard) { artCard.insertAdjacentElement('beforeend',artCardSubTitle); }
    //     if (artFrame && artCard) { artFrame.insertAdjacentElement('beforeend', artCard); }
    //     if (nftDisplay1) { nftDisplay1.insertAdjacentElement('beforeend', artFrame); }
    // } //END CREATE META CARD


    //TODO on VIS object.
    function createArtCard(nft){
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
        artCardIMG.src = nft.image_url;   //large 600 size  //OTHER IMAGE TYPES HERE:
        // artCardIMG.src = nft.image_original_url; //giant original size
        // artCardIMG.src = nft.image_preview_url;      //medium 350 size
        // artCardIMG.src = nft.image_thumbnail_url;   //small 200 size
        // artCardSND = document.createElement('video'); //MP3
        // artCardSND.src = nft.animation_original_url; //: "https://storage.opensea.io/files/2917253280b68adf480bbb4493d881c3.mp3"
        // artCardSND.style.padding = "0.888em"
        // artCardSND.style.width = "100%"
        // artCardSND.style.maxWidth = "28em"
        // artCardSND.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        // artCardSND.style.borderRadius = "6.666px"
        // artCardSND.style.marginBottom = "1em"
        // artCardSND.style.maxHeight = "55px"
        // artCardSND.controls = true;
        // debugger;
        // let artCardLINK = document.createElement('a'); //IMG LINK parent
        // artCard.src = nft.url
        //MAINTITLE
        let artCardMainTitle = document.createElement('section'); //Title 1
        artCardMainTitle.style.padding = "0.444em"
        artCardMainTitle.style.borderRadius = "13px"
        artCardMainTitle.style.border = "1px solid steelblue"
        artCardMainTitle.innerText = nft.name; //NAME
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
        BR.innerHTML = `<span>${getIconLink(BR, 'https://opensea.io/accounts/kryptospaze')}</span>`
        DWN.innerHTML = "<span>~</span>"
        BL.innerHTML = "<span>/</span>"
        if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
            if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, nft.meta.BR.url) : BR.innerHTML = nft.meta.BR}
        }
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
        setMETA(nft)
        if(nft.meta){ //loadMETA(nft.meta, {TR:TR,UP:UP,TL:TL,BR:BR,DWN:DWN,BL:BL}) }
            //for(nftLink of nft.meta) //TODO
            // if(nft.meta.TL){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TL.innerHTML = nft.meta.TL}
            // if(nft.meta.UP){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :UP.innerHTML = nft.meta.UP}
            // if(nft.meta.TR){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :TR.innerHTML = nft.meta.TR}
            // if(nft.meta.BL) (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :{BL.innerHTML = nft.meta.BL}
            // if(nft.meta.DWN){ (nft.meta..url)?  .innerHTML=`<a href="" target="_blank"><img src=""/></a>`          :DWN.innerHTML = nft.meta.DWN}
            if(nft.meta.BR){ (nft.meta.BR.url) ? getIconLink(BR, nft.meta.BR.url) : BR.innerHTML = nft.meta.BR}
        }
        //INSERT INTO DOM-.
        // if (artCard) { artCard.insertAdjacentElement('afterbegin', artCardSND); }
        if (artCard) { artCard.insertAdjacentElement('afterbegin', artCardIMG); }
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
    } //END CREATE ART CARD
    //todo move to VIS
    function createTitleCard(nftCollection){
        let artFrame = document.createElement('section');
        artFrame.style.backgroundColor = 'black';
        artFrame.style.borderRadius = "10px";
        artFrame.style.padding = "0.111em";
        artFrame.style.margin = "0.444em";
        var artCard = document.createElement('article');
        artCard.style.backgroundColor = viz.getRandoColor();
        artCard.style.border = "1px solid steelblue"
        artCard.style.borderRadius = "13px"
        artCard.style.padding = "0.888em"
        artCard.style.margin = "0.88em auto"
        artCard.style.maxWidth = "36em"
        // artCard.innerText = nftCollection.name; //NAME
        var artCardIMG1 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        artCardIMG1.src = nftCollection.image_url;   //large 600 size
        artCardIMG1.style.borderRadius = "100%"
        artCardIMG1.style.marginLeft = "-22%"
        artCardIMG1.style.width = "17%"
        // artCardIMG.src = nftCollection.banner_image_url;   //Collection BANNER size 1020+
        var artCardIMG2 = document.createElement('img'); //IMG  //OTHER IMAGE TYPES HERE
        artCardIMG2.src = nftCollection.featured_image_url;   //large 600 size
        artCardIMG2.style.width = "55%"
        artCardIMG2.style.boxShadow = `2px 2px 8px 4px ${viz.getRandoColor()}`
        artCardIMG2.style.borderRadius = "4px"
        artCardIMG2.style.marginBottom = "1em"
        // artCardIMG.src = nftCollection.image_original_url; //giant original size ~
        // artCardIMG.src = nftCollection.image_preview_url;      //medium 350 size
        // artCardIMG.src = nftCollection.image_thumbnail_url;   //small 200 size
        artCard.insertAdjacentElement('afterbegin', artCardIMG1);
        artCard.insertAdjacentElement('afterbegin', artCardIMG2);
        let artCardMainTitle = document.createElement('section'); //Title 1
        artCardMainTitle.style.padding = "0.444em"
        artCardMainTitle.style.borderRadius = "13px"
        artCardMainTitle.style.border = "1px solid steelblue"
        artCardMainTitle.innerText = nftCollection.name; //NAME
        artCardMainTitle.style.backgroundColor = "#05112a"
        let artCardSubTitle = document.createElement('section'); //Title 2
        artCardSubTitle.style.padding = "0.111em"
        artCardSubTitle.innerText = "..."; //NAME
        artCardSubTitle.style.textShadow = "1px 2px 1px black";
        if (artCard) { artCard.insertAdjacentElement('beforeend',artCardMainTitle); }
        if (artCard) { artCard.insertAdjacentElement('beforeend',artCardSubTitle); }
        if (artFrame && artCard) { artFrame.insertAdjacentElement('beforeend', artCard); }
        if (nftDisplay1) { nftDisplay1.insertAdjacentElement('beforeend', artFrame); }
    } //END CREATE TITLE CARD
/***************************************************************************************************\
 * UTILITY - all types of helperFunctions here-. - : )
\***************************************************************************************************/
   
    function getIconLink(node, url){
        node.style.marginTop = "-1em";
        return node.innerHTML=`<a href="${url}" target="_blank"><img src="../images/osblue.png" class="hoverGlow" style="width:2em;border-radius:100%;"/></a>`          
    }

    function getKRYPTOBOOKZ(){
        //LOAD ARRAY OF IMAGES.
        //LOAD ARRAY OF TXTS
        /************************************************************\
         * ASYNCHRONOUS - IMAGE - LOAD
         * Promises below. Look for FINAL IMG logic and finishBUILD
        \************************************************************/
        //LOAD IMG-PATHS into array of PROMISE OBJECTS, for IMG LOADING

        // let promisedBITZ = [], selectedBIT = null;
        // for( let i = 0; i<selectedBITZ.length;i++){
        //     selectedBIT = selectedBITZ[i];
        //     console.log("IMGPATH:",selectedBIT);
        //     let imgPromise = loadImage(`${selectedBIT.PATH}`)
        //     promisedBITZ.push( imgPromise )
        // }
        // // if(useOnce){ //ADD on a GLDFRM-.
        // //     let imgPromise = loadImage(`${rootPATH}\\copyrightNetCinematics\\frame1_gld.png`)
        // //     promisedBITZ.push( imgPromise )
        // // } else if(firstLast){ //ADD on a SLVRFRM-.
        // //     let imgPromise = loadImage(`${rootPATH}\\copyrightNetCinematics\\frame1_slvr.png`)
        // //     promisedBITZ.push( imgPromise )
        // // }

        // //-----------LOAD IMGs, called by Promise. When all selected images load, then BUILD.
        // Promise.all(promisedBITZ) //waits for all IMGZ to load before rendering.
        // .then( (imageSet) => { // .all([ logo, cp, tm, sky1,bg1,hero1 ])
        //         console.log('BITZ-LOADED');//,imageSet)
        //         //display default index
        //         showKRYPTOBOOK(0);

        // });
        //TODO (above) LOAD BITZ FROM BLOCKCHAIN. For now... use TEST CONTENT. : ) 

        //LOAD page 0, then by user 1 by 1.
        // showKRYPTO_Page(0,SPAZEBOOK_KRYPTOBITZ1);
        //LOAD ALL PAGES, not one by one. Enable scrollability.
        //TODO pass KRYPTOBITZ and METANET!!!
        showKRYPTOBOOK_All(SPAZEBOOK_KRYPTOBITZ1, [])
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
    //Loop all the pages and render free scroll...
    for(let i=0; i<bitz.length;i++){
        setTimeout(function(){ //DELAY-RENDER-.
            if(i===0){ //intro
                viz.createKRYPTO_INTRO(bitz[i]); //intro
            } else if(i==bitz.length-1){ //outro
                //SUPER COOL! this is after end page click! TODO: Hide stuff here. ~ : )
                viz.createKRYPTO_OUTRO(bitz[i]); 
            } else{
                viz.createKRYPTO_PAGE(bitz[i],i,bitz.length-1); //page
            }
        }, i*1000 + 1000 ) //DELAY-RENDER exponent
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
    nextPage:nextPage,
    lastPage:lastPage,
    toggleSound:toggleSound
}

export { kbz };


