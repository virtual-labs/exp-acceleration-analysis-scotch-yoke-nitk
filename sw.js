importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"0641c899bd905fe28d38ed6d2d3f384c","url":"assignment.html"},{"revision":"6e21de6e824c42f632209a27116208c0","url":"feedback.html"},{"revision":"82b8e7cc95a8cda04e0df9eb6f1cfc50","url":"images/graph1.png"},{"revision":"4cb5eb05e082035140be211d6f459ec4","url":"images/graph2.png"},{"revision":"e6bf3f22b9adfd173c943d33f3fe95df","url":"images/pause.png"},{"revision":"2225932b1270549d8047b0ccbe05772a","url":"images/play1.png"},{"revision":"4aabb3458a6cee6ebaf0c67419851c01","url":"images/procedure_1a.png"},{"revision":"17feb6c00b95745a7e87a55149545b72","url":"images/rotate clockwise.png"},{"revision":"c7668180e7e58019e14574ddcc731d35","url":"images/simulation.png"},{"revision":"058eed80d5b2d62bcb265b56e12787a8","url":"images/var1.png"},{"revision":"91869d01d42c70b73e537d86023757b7","url":"images/var2.png"},{"revision":"b4716c7781ef5da7af2e4adf20bdaee6","url":"index.html"},{"revision":"f5f330c4d725bd814b44fbdaf50a93cf","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook.css"},{"revision":"262b6b0ad513fbe807f47db9cf39b845","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook0x.png"},{"revision":"32a989dfc4f4bde24999c140ada58170","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook10x.png"},{"revision":"b8d5ea51a25893c4ff23f982f31e4cd7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook11x.png"},{"revision":"a7268407325c163199b8b4a0d1aaf0a8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook12x.png"},{"revision":"9e81c60e1fcb3e2bcaf4d0d53e51dc6c","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook13x.png"},{"revision":"c835221cb080ce3efc68ff2b77deca11","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook14x.png"},{"revision":"f098303b8d67b11d55e463f3f951e314","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook15x.png"},{"revision":"da17ba4578b73f3bece361a94be4e92b","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook16x.png"},{"revision":"ed0f27880004f5a61bea86bafeca3030","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook17x.png"},{"revision":"da3b1c7f585b9589459f1d6a2bea9264","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook18x.png"},{"revision":"4add9f41bd5428de17a34d7cb1e2c6c7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook19x.png"},{"revision":"3f6dd9a256112aaadf77f41e4f4bb482","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook1x.png"},{"revision":"2e19e90e544f371bf3b3eed5cf8f1fe5","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook20x.png"},{"revision":"c5758cabf39d5db63b29a2f881e97f88","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook21x.png"},{"revision":"9d05eaf3b5d4a2552b872b8d37a52cee","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook22x.png"},{"revision":"e1d2af85c019b9f5ad6e4d4dd57a40f7","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook23x.png"},{"revision":"bc1245b69597e57863d90dc0fa4cd5e8","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook2x.png"},{"revision":"f0816ee1c7e80dd7ad54250ac7fc75af","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook3x.png"},{"revision":"f8664c3ea3fde893dd7a7b2816a8ef6a","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook4x.png"},{"revision":"7204e608f0d829682e0f7a7fb7af5089","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook5x.png"},{"revision":"fa2800085181d50d8cd4e8dcd9ffc3d4","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook6x.png"},{"revision":"b836de8c3c0005a99652bea4d2b8c7e2","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook7x.png"},{"revision":"ec95855e0a7a9f308e1762a417a59131","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook8x.png"},{"revision":"890b89b8b900ab1b54f9041a2715a4dc","url":"Libraries/stanford-Interactive Activation and Competition_files/handbook9x.png"},{"revision":"024a32b24d9a1854ede637c3c560fe8b","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsandsharkstable.png"},{"revision":"6093651be571fe02895a250837ddff16","url":"Libraries/stanford-Interactive Activation and Competition_files/jetsdiagram.png"},{"revision":"bfbed2bfefb3cdc97a27e274abdb298f","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewer100.png"},{"revision":"dbf0b4cbe87be45e4b4ae9f303a0ea02","url":"Libraries/stanford-Interactive Activation and Competition_files/netviewerInit.png"},{"revision":"2ff1f6c65f990fed86769663e1598501","url":"Libraries/stanford-Interactive Activation and Competition.html"},{"revision":"7853db91e26c59528ba2cca368ddfa64","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"85156751d922e85d81adba51dd3ee49f","url":"posttest.html"},{"revision":"cf4d210ce59995fdcedf3dc9a3dc14dd","url":"posttest.json"},{"revision":"e46d4df05829b0059c947e93283d99d8","url":"pretest.html"},{"revision":"5de9f119cb15d20a4b25687f1485badf","url":"pretest.json"},{"revision":"af14f7457a1a93e39d87bbdb1164df60","url":"procedure.html"},{"revision":"2addcb7fdaadaf084c856fe7156a3696","url":"references.html"},{"revision":"7202a8c80171d9fcd4f71f1ada93268a","url":"simulation.html"},{"revision":"96f9386ae2245ee0bc8720b100fde02e","url":"simulation/css/general.css"},{"revision":"3e795b8e5867cd06a70b638f3d58d4fa","url":"simulation/css/jquery-ui.css"},{"revision":"b0cf24b2c8263274eb68b19d698c2174","url":"simulation/css/query.css"},{"revision":"7b64af17ce21fd761a4474f2196753f7","url":"simulation/css/style.css"},{"revision":"0a2500d78f174c62cf1ad86ab8bcf597","url":"simulation/images/bluebkdulls.svg"},{"revision":"eaa98e2b2084b14b267ba7e1e8acdb16","url":"simulation/images/blueccwdull.svg"},{"revision":"bae25b846420c83653c888eac2f09122","url":"simulation/images/bluecwdull.svg"},{"revision":"f286896a0e223f36cc9db97ebe7a63e6","url":"simulation/images/bluepausedull.svg"},{"revision":"2605b8ba706fa1c485d282b784c23b7b","url":"simulation/images/blueplaydull.svg"},{"revision":"011af776e07e07f3d614519077f7e195","url":"simulation/images/graphbutton.svg"},{"revision":"6cdbc43fd52824605f442686e7e0e8ba","url":"simulation/images/legendicon.png"},{"revision":"7d811f24fdef84ce6ab775aa4717c793","url":"simulation/images/legendSYacc.png"},{"revision":"1e01241b44562ec9be28ccdaee5741c2","url":"simulation/images/logo_nitk.png"},{"revision":"02b3856455113dbe967bd95f04df94f7","url":"simulation/images/slider_handles.png"},{"revision":"a50550f6c2be774ff4de791d9e4a9aae","url":"simulation/index.html"},{"revision":"ec6faeef9b083a1a9316bfd13a2b052b","url":"simulation/js/dpi.js"},{"revision":"84ca747eb5f076445ff836de49608628","url":"simulation/js/jquery-3.6.0.js"},{"revision":"5da2fa2a91f7059b60e7fd508be63d02","url":"simulation/js/jquery-ui.js"},{"revision":"08a481084856867d371586cbf8e835ef","url":"simulation/js/jquery.ui.touch-punch.js"},{"revision":"9b9e5df5ef16f8fdd3e65c14e2149f1f","url":"simulation/js/jquery.ui.touch-punch.min.js"},{"revision":"1f7b75054777d68389163c5cdee54f07","url":"simulation/js/MOMscript.js"},{"revision":"5479beafc888ccea859b1fc2407e7025","url":"simulation/js/newscript.js"},{"revision":"56b81c191c1a2846ba5bac9570ef1ecf","url":"simulation/js/script.js"},{"revision":"723f503a3d3e138438b027668a87d779","url":"theory.html"},{"revision":"a381ef0e9b1fb08646a5572b934c26e3","url":"validator-report.html"},{"revision":"8875847f8188625534afc2b66be409ce","url":"videos.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );