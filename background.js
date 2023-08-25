const defaultFilters = [
    "*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
    // "*://*.facebook.com/business/ads*",
    // "*://*.wpp.com/*",
    // "*://*.dentsu.com/*",
    // "*://*.publicisgroupe.com/*",
    // "*://*.groupm.com/*",
    // "*://*.omnicommediagroup.com/*",
    // "*://*.ipgmediabrands.com/*",
    // "*://*.mindshareworld.com/*",
    // "*://*.wundermanthompson.com/*",
    // "*://*.ogilvy.com/*",
    // "*://*.lowelintas.in/*",
    // "*://*.ddbmudragroup.com/*",
    // "*://*.leoburnett.com/*",
    // "*://*.mccannworldgroup.com/*",
    // "*://*.publicis.com/*",
    // "*://*.havas.com/*",
    // "*://*.contractindia.com/*",
    // "*://*.tbwaindia.com/*",
    // "*://*.vmlyr.com/*",
    // "*://*.wk.com/*",
    // "*://*.mullenlowelintas.in/*",
    // "*://*.bartleboglehegarty).com/*",
    // "*://*.wearesaatchi.com/*",
    // "*://*.leoburnett.com/*",
    // "*://*.tbwa.com/*",
    // "*://*.grey.com/*",
    // "*://*.droga5.com/*",
    // "*://*.ddb.com/*",
    // "*://*.rga.com/*",
    // "*://*.indianporngirl.com/*",
    // "*://*.aagmaal.pro/*",
    // "*://*.mmsbee.online/*",
    // "*://*.desi52.club/*",
    // "*://*.crazy18movies.com/*",
    // "*://*.ymlporn7.net/*",
    // "*://*.xxxindiaporn2.com/*",
    // "*://*.goindia2.com/*",
    // "*://*.desixxxtube2.com/*",
    // "*://*.anybunny.com/*",
    // "*://*.porndor.net/*",
    // "*://*.pornolienx.com/*",
    // "*://*.dalporn.net/*",
    // "*://*.homeindiansex.mobi/*",
    // "*://*.freeindianporn3.com/*",
    // "*://*.ruperttube.com/*",
    // "*://*.hdtporno.org/*",
    // "*://*.pornkashtan.com/*",
    // "*://*.desixnxx.mobi/*",
    // "*://*.indiansexmovies.mobi/*",
    // "*://*.desisexy2.com/*",
    // "*://*.fullindiansex.com/*",
    // "*://*.pornorolik.info/*",
    // "*://*.indiansexgate.mobi/*",
    // "*://*.indiancloud.mobi/*",
    // "*://*.eutbeh.xyz/*",
    // "*://*.januflix.com/*",
    // "*://*.kaamuu.org/*",
    // "*://*.xnxx.tv/*",
    // "*://*.megapornx.com/*",
    // "*://*.desijugar.info/*",
    // "*://*.nudedesiactress.com/*",
    // "*://*.xodesiporn.com/*",
    // "*://*.onlyindianporn2.com/*",
    // "*://*.xnxx.com/*",
    // "*://*.freesexyindians.org/*",
    // "*://*.hardindiansex.pro/*",
    // "*://*.pakistanipporn.tv/*",
    // "*://*.indianfuck2.com/*",
    // "*://*.pornmaster.fun/*",
    // "*://*.hifiporn.fun/*",
    // "*://*.indianpornflim2.com/*",
    // "*://*.indiansexy2.com/*",
    // "*://*.sexvideosxxx.mobi/*",
    // "*://*.indiansexmms2.com/*",
    // "*://*.watchhindiporn2.com/*",
    // "*://*.porngif.cc/*",
    // "*://*.mypornsnap.fun/*",
    // "*://*.x-porn.click/*",
    // "*://*.rhdtube.com/*",
    // "*://*.indianporngirl.com/*",
    // "*://*.masaladesi.club/*",
    // "*://*.jerjer.me/*",
    // "*://*.aagmaal.pro/*",
    // "*://*.hdjerjer.xyz/*",
    // "*://*.crazy18movies.com/*",
    // "*://*.auntymaza.live/*",
    // "*://*.fikfap.com/*",
    // "*://*.xhamster.com/*",
    // "*://*.xhamster20.desi/*",
    // "*://*.xhamster.desi/*",
    // "*://*.xvideos.com/*",
    // "*://*.pornhub.com/*",
    // "*://*.ogilvyindia.com/*",
    // "*://*.myadcenter.google.com/*",
    
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)