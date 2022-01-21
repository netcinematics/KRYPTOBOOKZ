# KRYPTOBOOKZ

LINK: https://netcinematics.github.io/KRYPTOBOOKZ/

## PURPOSE:

- innovate NFTS to be entertaining.
- NFT SERIES, GALLERY, MARQUEE, and EPICs.

### OVERVIEW
The vision is for NFTs as unique pages of a PICTURE~BOOK.
Where every component is an NFT. Not just the PAGE.
Also the TITLE PAGE as a PROMO. The SNDTRACK.
So we need a STRUCTURE for this, and a CONTRACT.

And a few important TRICKY CHARACTERISTICS.
The BEHAVIOR needs to be:
> COMPOSEABLE, EXTENSIBLE, UPGRADEABLE.

### DESIGN~STRUCTURE
> FRANCHISE, SERIES, 
- EPIC-BITZ: IMG, TXT, SND, VID, DAT, VIS.
> IDX: SERIESID, EPICID, CONTENTID
- IDX: SRZID, EPID, COID,

> Solidity:METANET
- Map of Maps of Maps (or struct)
- IDT is TIMESTAMP IDs
- IDX-2-IPFS and IPFX to ...

> Web3:METANET
- Convert IDX 2 IPFS.
- IPFX is IPFS token Num.

> DATESTAMP- IDX - FORMAT
- YEAR_MO_DA_HR-MN.TITLE_NUM.idx
- EXTENSIBILITY ACHIEVED (above), with ...
- Ability to LAYER on VERSIONS, with ...
- TIMESTAMP INDEXES, and GRID9.

### TXT-BITZ phases
- How To make a Crypto Book, 
- Start with the TXT-BITZ.
- Core SCRIPT, perfected WORDS.
- VINTAGE Style - Display CONCEPT!!!
- OLD WORLD, EASY 2 READ - TEXTS.
- ~~~ with *ornamentation* ...
- NO GRAPHICS. NO AUDIO. JUST TXT. WHY???
- TXT separated, is FREE TXT.

> FREE-TXT Technique
- The story needs to get out. 
- This TECHNIQUE... of TXT-BITZ does that.
- Print it to BLOCKCHAIN. 
- Little BITZ, that form together into a STORY.
- into a KRYPTOBOOK.
- The IMAGES (IMGS) come LATER. 
- In ANY FORMAT and MANY FORMAT.

> 2nd CHALLENGE FOR KRYPTOBOOKS:
- EXTENSIBLE, and REPLACEABLE
- REPLACEABLE, is done with JS slight of hand.
- If the base IDX is STRING ID, it has no override.
- If the base IDX is ARRAY, [0] is original, with [1] OVERRIDE LAYER.
- The Web3 Rendering Engine - renders the OVERRIDE.
- Behold, a KRYPTORENDERER. 

I think that is cool. : )
In this PROJECT, down in the ENGINE, will be...
A Render Loop, checking the 9GRID for every EPIC-BIT.
- for each BIT, is it CONTENT or OVERRIDE.
- LOOKUP and RENDER as CARD by VIS:{settings}.

### ATTRIBUTES of the EPIC-BITZ:
{
    franchise:"",
    publisher:"",
    creator:"",
    copyright:"",
    trademark:"",
    projectStartDate:"",
    projectEndDate:"",
    epic:{},
    series:{},
    content:{},
    //IMG, TXT, SND, VID, DAT, VIS.
    vis:{}
}

### TODO
- MOVED ALL the KRYPTOBOOK logic to Web3 KRYPTORENDERER.
- TEST cheaper GAS: Maps or Structs.
- TEST proxy for SERIES extensible []...
- TEST solution for REPLACEABLE [...]
- TEST direct script to blockchain (infura)

### INNOVATIONS
> CHALLENGE: NFTs as pages of a BOOK. 
- SOLUTION: Web3:METANET. 

> CHALLENGE: Everything Connects.
- DESCRIPTION: Like CSS: {top,tr,right,br,bottom,bl,l}
- SOLUTION: GRID9 CONTENT MAP.

> CHALLENGE: INFINITE-REPLACEABILITY.
- DESCRIPTION: All Content Override.
- SOLUTION: IPFS, on EPID:[IDX,IDX, ...]
- SYMBOL: [...]

> CHALLENGE: INFINITE-EXTENSIBILITY.
- DESCRIPTION: Add Content Anywhere.
- SOLUTION: Map of Map of Maps, GRID9.

> CHALLENGE: INFINITE-SERIES.
- SOLUTION: PROXY

> CHALLENGE: GAS PRICES ON BLOCK
- DESCRIPTION: MINIMIZE Map of Map of Maps.
- OPTIMIZATION: STRUCT of Maps.
- SOLUTION: Reduce HASH to TIMESTAMP.

> CHALLENGE: IDX, EPID, COIDs
- DESCRIPTION: How to UNIQUE IDs
- SOLUTION: TIMESTAMP at CREATION
- FORMAT: YEAR_MO_DA_HR:MN - 16BIT.

### ROADMAP
- TEST KRYPTOBOOK: OrbyOrbot Origin
> PURPOSE: prove the tech.
- 1st KRYPTOBOOK: Trial of OrbyOrbot
- 2nd KRYPTOBOOK: Mission to Marzamoon

### RULES of KRYPTOBOOKZ
- Zero Plagarism Policy | Must be Original.
- For Human Good Policy | Only for good.
- Signature Tokens | Confirm MINT Validity.

----
### NETCINEMATICS
2021-2022(c) NetCinematics llc.
KRYPTOBOOKZ(tm), KRYPTOSPAZE(tm)
CryptoBooks is assumed PUBLIC DOMAIN 2022
