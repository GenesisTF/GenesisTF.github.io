'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "01758053c60b6bde1c0441e5e042ec1a",
"version.json": "9f0ff7c4946a01a9498da88473abbeff",
"index.html": "0c75504aee931d68e841f8896f911087",
"/": "0c75504aee931d68e841f8896f911087",
"main.dart.js": "ce444da8b22b743f40cf77ccbaf1c1e8",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "144ecef3a7ea8aa7a017a99e20abf99d",
".git/config": "097d1bdcd50013424f58626067dcc33b",
".git/objects/61/4d8d3e3e51591f39d07f044569cda7c3875a54": "0a68bfdada3de17a8c146b98ce8234e9",
".git/objects/61/d01eb3138ad2cd2db5c7a0e5d3839628b60ffd": "65b52c142dd308fdd0af1e17f0876126",
".git/objects/95/0c5bb54bc199ca3d5ba6fee071baac39921496": "899faf8108c91c86e56910ccfe1618d5",
".git/objects/95/107e88ec921ca94a4b94166afd3faa86f829f4": "bcbb310acf0e3ca5a1bcad281a220807",
".git/objects/92/40a386541c478d889b99834fbdd65248ce22d6": "1f576fcf2071f26c6d21966880c60f2e",
".git/objects/92/05354ae7bd0c3330f93b00202030b31a3386be": "ec8cc7580f9d6645b53ff3f3faab1762",
".git/objects/66/3a8545bd5d95701b101774fc0e1946d40f6f28": "697b424d71194a2d8d3d2d2c5131d478",
".git/objects/50/afcbbfac6e7a377ca7185d3a0e6cf783b64ac1": "f0c10f441e9316019bfe6c5bbb1a132a",
".git/objects/50/e2c0492d0036027fe86af7a1c88a38b22fb046": "e184c10e63ddd6dd161cb548cfb687d0",
".git/objects/50/b25edfa61df5ad711c2daacee9f12127e82234": "7dbda186917297c351a92db638d3d1c4",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/bb90777268a06043ec8775d8ff502cafd1de2b": "7186e246e2d90c2a2f52c3b7bc8b4ef9",
".git/objects/68/07df19af7ecf68617be034608be17a51b77235": "a5fab16e2bc0dddb5f458fee98370ecb",
".git/objects/6f/7ea29a834b3e131612d7ca40a0eb88b463252e": "4056af02b32f1ad20312e00f756999a3",
".git/objects/03/8928d2c5c746553b3049d1dfe571d6331bdb09": "0f4247335caa91c60d6a7f5661549bc5",
".git/objects/03/5127c8a3dbc48236b3f976ae7e439c73dba210": "775214d9822f5db7f359b7667112a8de",
".git/objects/9b/726f4f737fe369ff8b7436a557ac182a4e38d5": "ae9fb35719236d76aa24b9ec2af9fadd",
".git/objects/9b/abdadb3060ad41775cdca201702f771ab40f8c": "6dd71a9a302ce17c914bb0506b727a01",
".git/objects/32/e66003970a2f9dede52741f071e82bfb5b1450": "5a9d82bfd58419f02cab81b7461e0a87",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/b38d4497e6f0d00f26774b9362e4d1a1d91ef7": "32ee9fe3471d08e2e7d11782425fb3db",
".git/objects/3c/40812e2d21e6f1d9b8117f28c01531d3c4436f": "62353a7d8307aaeec6321905fe713a56",
".git/objects/3c/965599978ecf98b15ab1609d3748b5d4e7916c": "90fd730bd856c43a46bb3e4bfa15ddd1",
".git/objects/56/a545127edf96e64c7defab4ad8481dc24601e1": "777c38b93faef7afce27375988bff585",
".git/objects/3d/4b7d44f84dfb74054102fe9dce0301336e0166": "1ce8fc61ba5b37979bf491cafdab8faf",
".git/objects/58/dc11443708b634ecd79c1047a428547a62d10f": "e99f037338ea13aa2d1e6dd8cfeb9cfc",
".git/objects/0b/84bba9abe859bf35ce348723420d7d4bf663cb": "c6ed845163f576685a87b8cf5afac6c8",
".git/objects/0b/cb6c1f87811e15edc5661063905252ab173391": "6a5f4321f175ebd0db96d806eee665fd",
".git/objects/0b/106b553e9c5b30a3907e7ba6bb683e5daf4bf4": "7522e63297581078e963f2778bdc1c2e",
".git/objects/93/a72ee60fd769561bd769b7fb4f982de55379fd": "36b4ed966e48d4a72ec31d130498d320",
".git/objects/94/7b7ad478e49b431d769c14661a99bf7c0cfc34": "7c0b90c9251605be2eeab0eca331596a",
".git/objects/94/0fdbf775c092a0126fd434ade4e400257e848a": "f63a972466bb4304c987e41706dea828",
".git/objects/94/e2d2e6309575039d6486318f5a40f941b3f854": "a6b12f414a0ddf4c20e6dbe6b5bc6e63",
".git/objects/0e/3e6d941162e57d3e1964ead7779e8ce479a298": "4a9cbaffdb200c880c45a6dbe72cbb7f",
".git/objects/34/f7dd5a21b1bda1b9e669e6fcc5383e41c7d697": "b9307391e38127f68ab7c6b64461bf4a",
".git/objects/5a/11c6dd0444a2e155a2221bc7d72a15fc780065": "088522852311825af9381b2171e7a77c",
".git/objects/5f/5877bf935887e8ccf1ac76342e30ea6f998fb1": "aecb0ac5da15b96aee2459529f26cd64",
".git/objects/33/ee8c70fb1f6b951719129ce14acd0718692abf": "8c6041837e1d4307cbb90b92108a79ef",
".git/objects/33/78cde76f77321a5c6638445c4726f4d4d7b9dc": "377f291648e5e1f64f06a961a4e446d8",
".git/objects/9d/e8b39cd590ce940308d0dcc5d4d7229abd4d3b": "bd1d25f38590f63ce638247bd1de2a99",
".git/objects/a4/6a72e7e2e003437629eae5d53cfb5aa25d5b30": "112bfffd63624b62184df2905e9cb9d3",
".git/objects/a3/de7b1e23f5c5cd063134f682d82b5b1041ea4b": "d2bff407f4c83e5d638e30284f69891f",
".git/objects/a3/1c448ef02fc90efa495a42d961470efea5e7b1": "724a2c51804ab31886c742611bccfac7",
".git/objects/a3/903caa072d1e9a9997d4df493e1d80a73965c1": "bc0edc8d71960cec6f02facc5b16da21",
".git/objects/b2/cb144dd22af1ffaf688bf86277a3b71b20286d": "72213defe3ae044eb353ef7aa52b58cf",
".git/objects/b2/67dfd79f26419b165cea017bf61b01b8d62f0e": "3552b6e407e09d6f644064114669534f",
".git/objects/ac/1afa488d6b7788225ad9809a0c812bfe5a5fec": "da60733183b37b43f270f3ce1b4421c8",
".git/objects/bb/ca54f808425fffbfebb17d698b9930c57a1df1": "2bf70eaad706051f3629c752bb13a822",
".git/objects/bb/64b6c664589cdc83a138063e29af19968a1ac0": "a07ab30650a53375dd5f8620f8634705",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/1c68582f949355901627601fb13543ae396162": "0d8eea5df70c5a548c9c2fa3ce5f157a",
".git/objects/df/36f2730932ab8b9fd69fa5b29d5c6fe2b6e150": "02a980497804b26510b203dbf07ea108",
".git/objects/da/4d3513359e1981e5bc6e4722e4febf4e09eaab": "921521a50b7d42887c1950fdb9ff2a8a",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/5ecd7aaeab23cb8203aa69a3f7ff11a1579cdc": "625f20525712412b93374132234f9709",
".git/objects/a2/3ebaeb10fe2497b0a61623f70d99792b23578d": "d44107396b5aadd4485938dab6071baa",
".git/objects/a2/3ec8093761ca462ba96998bab02a20c8ffb80b": "42967b103054a2900f194ef2a4e96f88",
".git/objects/a5/c3935ba2d3f2414d34bbc812e7ec6e52ea1620": "9381fbebf3098da2cd5a9577a259782e",
".git/objects/bd/04bdb480aee88dafcb7eb6ea24a6d97a623d3c": "91fca1781ebfc32082dae1c8a6aa79da",
".git/objects/d1/f486bd47191f254a8151499e2368cde4b63d7e": "4512759881c912d63d22bd8656d4e44f",
".git/objects/d6/0ecabd69b3ed621a5d5c5e7128d7b54b1514f2": "93c611db6c2a1cd8d65a4a641e621ea9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/415004bbe0e533ca0e9c0b29980eb020f1273c": "1a0b60d1b7a28bab16f30abe79c4c5d6",
".git/objects/ae/957fe071b3030b6dc4befa7ee185b4fe3a92ba": "465d9678c1e8f45eb1456eaf97484104",
".git/objects/ae/9fae374228101cf96803788a3f707b4dbdb915": "45e81d05b31e8676645cd65e31094a4e",
".git/objects/e5/cfcd2970d3b36384156632547906ca154241d0": "fb3effe6b82952db5fc41458fcfbb4ba",
".git/objects/e2/f19f153e95a164910cb1803139c7ef5fc40fde": "b78e9fb0c8b2023eff91ad6a7b4f7ce6",
".git/objects/f4/190ae6060e001addcfd069ce80e2035b17bafc": "b3ee39730c305ebff37db49ecfe60379",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/437c2715ad9539d722b845e36a88a6bba2fd2a": "2b72fb5a8640cafb8a6331ff94013e30",
".git/objects/eb/c87fe6a882594619be45b748d29d72921db91b": "c17b0248d160d02f9008dcbdae7c5840",
".git/objects/c7/f2e5037d55f6f62065e3361d1905245ac11859": "2c8cb42ceb49cc3488c53689d459c72a",
".git/objects/c7/4fdb852ed7e3d98db3ff3a29f8f8f4c0e2be8d": "70d6d50f362934766bf1b44d6d3dcb42",
".git/objects/fd/d58f44001eaa22a506eed02e64e489cc65cade": "3d2a7abab52f570b30032c9bb1388965",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4fd037e1a55f519720322b4d199d2982a1153e": "5558ed5e33651b18895e5aabb5dc6420",
".git/objects/f2/b4cd12b93d7f65fa43b654b529ddb5de332d22": "2a0b40b2eb437c4f0f9270b985166680",
".git/objects/e3/1d9038e0e30d53852d59e3713818a844e261eb": "2dba1738cc17649eb58043b6267ccc86",
".git/objects/e4/0fe385679c92b8a609a6214707d8c91d37640a": "0126b71cb87497b1d41207fe6a69253c",
".git/objects/e4/7dd4502efc6f63fecfa2df03bf38ae1ac54b46": "e2e26b09cece161b9836fd2c3cf73737",
".git/objects/fb/a1d53bf44631a3c687534683fce73466536aef": "1ae97da81d8f5c3e135c596c6ecd2803",
".git/objects/c1/2a7404863e62d22141622217b377718125d2a3": "ab1a746986804d4ea5a71a12e5b4a7dc",
".git/objects/c1/dc76c56b5e798b361044bf3e9db6510c5fde24": "7521f83bae4d2ead7ac7148fbdfe5715",
".git/objects/c1/2eaef390855033e9578ab8739679bbf195e231": "0cde79ff6d8e7693438800f5eacb5569",
".git/objects/c6/14dc815e478b1c5017e283e4b88411db8f690b": "dfd2dfbd8c1174da9e165e4472721e37",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/970918515a753f9f26a3a4ac6cd7b26be63a7a": "f540858e3c7baf6db7dcc33512827937",
".git/objects/18/39ca692b3c8a31b790cff23bd651a1bb2fefee": "1b4331d493cb267b7fd5624c989e4bfc",
".git/objects/27/eaefd1313cf4a284da709921128ba9150cca3a": "c3ad8d18242ccadc0cbe4fc985fc1ed9",
".git/objects/27/9ebf3b8092e648e1d3be2859345c7412b60cc8": "f54959df5554e470695adc243577982b",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/7b9fec04ee3aaa7dd8a2e642ef766b1c7bb759": "f1057b8f2c24ad8bb12bcf06c1c6b1a4",
".git/objects/4b/7b99e4085275ffd620d39565af5a1f496d5449": "cd5375fe7a34b61dfa5a215bee7dc78a",
".git/objects/11/49da46e7a3cd67d7c826abe0134196462baffd": "92b5c5f42936cb384423008a4ee778b5",
".git/objects/11/ae5499cfcac37d51e10784a4c85ec07d41a717": "6a1e4eaa4f61a5932bba65f654629831",
".git/objects/7d/82c6f900d68b7dff45993dadbba8c4b5442e06": "870379932bbd932cfc009e8244e444bb",
".git/objects/29/39b9f901ebe159670e74312f063da426314012": "84ae8433b34f0b92bcb74626fc814fc1",
".git/objects/29/34211b2b3c928bbf4e391aca52aa102d276a97": "b0e9a38f6706b6f211af0797186e15c8",
".git/objects/29/536ab6ecbc82a183e6e4c69f1834810cd9b9a8": "6ed26ed233a31941ca2a3279c851e0cf",
".git/objects/7c/463e66588a6ad18c7fe1d78c25c8be8540ba20": "21481b3b1cb284379ae9cdbd195a2c7d",
".git/objects/7c/bb7aafc0d4e1bcde5d1811473b707f6015f195": "863bd1c41719551a3513dfcb52c50992",
".git/objects/7c/e2dd0f2aeb5c3724e612b43c32db5d346a1520": "79a65cb195cf9a2a57cfed8e9c8db7f8",
".git/objects/7c/b855d5cc83a6442a7c768ef2a9f4ad6da359d8": "1511adaad0e30a79aad630e3db66ee24",
".git/objects/16/0a3da0e17b729a29d220980e4d42bf07429a13": "be10cf80bc5fd32578145cb52b854ffc",
".git/objects/89/289ea49611931e80578de41c93d3798b0fb4bb": "4a354e9c08f6a0140c2feea9fa9333c8",
".git/objects/45/7e5855260a4de67c3c6e77a6ef7335dc12ac90": "633305ca31365ac73eb22684c6c4ac52",
".git/objects/45/fe9c06e77e8d38527e0611668c4b1b210f7b32": "a90d121ed6c64b043965f1ece14a1187",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/5bf6f924023cd45910487c07a3311bb37d8873": "b21ffbc6302a61c9d40243a5ca4beb9d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/8b2204b9f7ebbe1a68227cb7702a3583c5d07d": "f013819a0c4d946d3bb6fc7c4ce7098c",
".git/objects/74/55eb3b6c633561011624526d4dc302d04e4e7b": "4eee058d14ebb12e6a4a9f609c5dfa20",
".git/objects/1a/75c66eed56834f51b8600a7ac00612f1e59085": "3f0e91c3ff76fce174b0344c7e4a8623",
".git/objects/28/5de30b4179f11d13cab39dc8fe0ef86b80f151": "c57a6e32c801a0dfef274b9f63b23e65",
".git/objects/28/79d3dac1043c9b8dd69a7918a3b3383b37a23c": "e28694e39ce7c0c3a4f7cdf20c9989a8",
".git/objects/17/0b2afda04ac9cf274de9636a2d7000ca5a992b": "d4da5befc2a16e4bbfbba72a69dfbc54",
".git/objects/7b/749c2626192eea1e96c7f1261d344f10796aa4": "5f3607f9fef25464d7d107faecf6fe34",
".git/objects/7b/4d4ac867da56931625e054e4994f16d3f513c7": "97639a870acfb1171c345ddda63dc33e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/a31de2118989738e0fdb57ce29565a4d812ac1": "764ef3b2e410fe57ec31c555a5c82b00",
".git/objects/10/ccd371156baf1e6eacc4eb7f71c4fbdba5bd1a": "17b3b90bd1255a32f60a3caf0826314e",
".git/objects/26/139b078e22393c78ccb84612579c8113c1f13d": "39ebe7f07602fc8a21755cce61c9abd4",
".git/objects/72/b02a376bcd03feec7afdcd3721f5fd9d6248d4": "71d6830d8809df07db3c0fe1b310c1b2",
".git/objects/72/5287bea9f8acd3a8c952939b71b3bfcb51bf81": "b69de8adb81050f3851b867cd6726bdd",
".git/objects/72/ac18976246fe992158312770c285af568256a5": "9a1cf2ec5f4ee7083428ca6375559013",
".git/objects/44/5527eeaeeb3f5c6ae7e599893c4114701bfbcc": "1329f02b0ec58e99414ad2f6a3c9019a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/098282c19eaec2385c0ec7618bafee20fab8f9": "30678cc81056ef3728c5105bf98268db",
".git/objects/2f/608e2117584d3c265b6018ac3acd641391bf79": "13de72f005a1e2efc9e16289122d434d",
".git/objects/43/c752adc2a9691787922e75c79c9d09a57d9d04": "3884d90371f66a57d89782b04c4d70ec",
".git/objects/43/0dc42d81c1fd2e317ea726c108cf97ef7a2a6e": "303cbcbf7b70f7e8744db9e3b281c170",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/a045103b29c9245145f0641eed33fd6b2429c6": "5041be3f274825f1e87356afbb0315ff",
".git/objects/38/c4832d43717689d2dc671d7a15ec1d8d3bb564": "4289918f66a7d0f15cf8add1e6172cd3",
".git/objects/00/a0c807574721f0c247c03042d2f0ac769ed4d5": "3c54cfeb46130001c2ac84093ca91129",
".git/objects/36/035b05fe9569aa90447d59677ac832483e2af1": "654254c602ce99c96b85798366d4cc3d",
".git/objects/09/97bbcb5fbab0c0647c1e3b8956b8b6022272cc": "a4d3405c9e214ea67024cd5e7c3e5e8b",
".git/objects/09/db98dbaf4fb5aa5836d8c2910116540b1b6d2f": "008b6b5e36b3a930e672f216594c28e5",
".git/objects/09/b9f52346a7911ed68a9bccb4f1ba943145f47d": "9b681ffcc5084e653a30db51b46e4f5a",
".git/objects/96/5d23edd5a0fcce707c4a9740cdddc63d8c3a67": "4d9d42069c6b0a620712c63159678564",
".git/objects/96/bd73e95b69e6024aebdde3d001f004bfc5965d": "6fd473727ad5964f8ef748024405bd92",
".git/objects/96/efccd7abc2afc34d81e536ca50944dd1ab43ee": "f28f26325fe15da6844cafdd65cb0b61",
".git/objects/96/1d27816d444d5155a6188b9e38df6f35c09b74": "e7193a510283b39cdb2f0b9121217ab9",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/4df3f6ef127a88ec0fc4389dc09c2dbfb942fe": "d53e833713b7f09803fbc608c0e58358",
".git/objects/54/700c6ba8bc0cf02dcecb4439c5a2b50d9ba312": "731819d9f2541fb3dcdd12fe96b115d6",
".git/objects/98/58f3e5769bbeb1a001948ea21898314ebe6717": "950dbfe47cdff9bc3ba1c375ff6f2c65",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/71b9c05e4e2dcb3bba258039bb684cb955f974": "7f76baffc9a76f6c636b1c31f78f8a6c",
".git/objects/5e/f86b036508916226348c6dcf2e7d8f5bd6c97c": "51bca064184402dd2919c8f561fd9800",
".git/objects/5e/14af3626add028ae08b18476b87ed820eec838": "8d5062a0f9c32709d6470c6129389804",
".git/objects/5b/49750b116b67ac4f8b33e218e2f86bfb18cfa9": "2eddd5f80987c032a541bd22e60859a4",
".git/objects/5b/907057d26d81ae53565420e93a90d960d402bd": "9aad61bc1395a92fc0cbcce36ba780a7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/0c7cb8f307d29b939aa227d4448f9d2a2f5ed5": "746816841c44778587fdee99d874b30e",
".git/objects/6d/c486a66e74795b2fe6b7548f9b553950f4ed1e": "7246f1097157938dadc3003881e88fd9",
".git/objects/06/38ae4ccb2fa1625285987b0191964a722c0740": "d354a0782b66ce2135f6570620621348",
".git/objects/06/e2deb3947d9c186821199c33301d130d8ab499": "3c07aeb3c280e23118e2252691725502",
".git/objects/06/40782cbea8a377d32ed3b56d8ace2172f9de90": "86a23b77796e731b275f1659d06bf1b6",
".git/objects/6c/58fe536bfd1fa53603b5352956ff7f93e71c65": "a9a167083864d2fd6fcd57dc0b7f378a",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/39/999a1ae0c8285ebdda56cdd9c6338e09ceaa3f": "d680abb63460896dd92a9310b3e80a3b",
".git/objects/99/08fab135e947b7335cebf1efb78017c2f33dfd": "716a1d65dc26fe100485ae46a46d7b86",
".git/objects/52/ce7b0d1d1f4fd9a689f0fb3d54beaefb1b8f63": "b03e96ef96ec290fe999c3bcad70c60d",
".git/objects/55/a5ba76672fdf6d597c8db939ed636a14d48759": "dfab32e6efefe385805c4dc4fb7ff306",
".git/objects/97/48137ed3d6f1d22c1ca24bc427a898fa54f6db": "0bf38e81b74f42c370f7b03fe8b07682",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/a5402a3c629262234ed11459c442c684e8ef21": "c5b530cc6bbf2963d85184c97307f2e8",
".git/objects/0a/bb02bfe9e44b4134344ecdb67c6e7f56c98cf5": "f89b745a0a8acef76a520a3113e3f88c",
".git/objects/0a/6fa5e937b5f1f5c3bccada98506cc3e39275a2": "c7c859f9bfb840714fe02bedf0f3eedb",
".git/objects/90/2b71a441233ed312dac761a77cea6415c8b600": "d1f13c3a933c4b71e1780a002d55ef44",
".git/objects/90/1ed27eb1de2b2a658e1ef6ba7649ad366cb206": "23bf88ea8b26b305499dad86563046b2",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/230107f18b8f7fc2cac38ceb4eab4df3d7f9ac": "75b5cede2bbc3613644f8d6c211c1da9",
".git/objects/bf/d62aa126981d476e53fb7c9a2062e2e6c8c9b0": "00b48fa169585e42a81ff02195bafdf6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/d2e838ea7a3e6e138cc65ee3f1a763cdaa41a9": "5aaa1fea0361e9963f93b8494ce4b3b0",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/a82ad5bc0a82e2399f5bd225b3f636b359a88f": "dad09ee80775700339f197209845728c",
".git/objects/b8/99cc34c7087489c23d889be294374730ebfc51": "f1727713c45da2f753a14f1118a903ba",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6075b95cea76d4fd80fd8aad80908ae15ac106": "cb15a1bc6b2bc3255357016167f4cd13",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/d5/cab5a9c04ae0e15358ab25fc5df0276a11cd48": "4ca9618ecef16ef605e258b40a22482c",
".git/objects/d2/b96dd28a055642c62592ea598f9a2b9c04d6c0": "e0b79db8d07b171b430a7378ff7dafdb",
".git/objects/aa/2a8f0338689c45e0bc72fe85ea9f422dcaf218": "731c82037644688cd91db337c326975e",
".git/objects/aa/5fc7dc172c02a861f5b2bf2544c2053d82984b": "56ac08298d70ad5573fcb9a03c1656f0",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/d14a70c6014c73b92b034ba870005ff76dff61": "8c9f93c4c45d3bc2ba45a358e0c0ea3c",
".git/objects/b7/9235fa3c09052a67d9612656f6eac182627ff8": "52b4c3787b6380ce5345aa60d9fefdf2",
".git/objects/de/3a22aa1ebc1ea4560babb418532a1c1ff73c2a": "06fa18475573e313613b0d4bcbf31235",
".git/objects/a6/de27d7b180756c5b698eb2490c2fa06dbc3dca": "dce7349c21d2cf7d819a406010fa8b0f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/7d39e566c74257b06874372704019d6bf656ff": "cfd1e97278c9b7e3c836efa474a32d0c",
".git/objects/b9/ba89c8cdc324a9c0d9164ec48df9f10bf9c245": "8b8182a0cdc5b263b4bddde62732d230",
".git/objects/a1/26bb3018ff8518ce64551aefad00d3305c8192": "fc37532fe6e2a75955bf5e4f9fc122f2",
".git/objects/ef/8d87c20d4a24ccef848717a5fa9bb9bd5b3ee4": "e93c6c15776eddbd1fc9fcb4247d8299",
".git/objects/ef/3060a44550c7bc0edf3454bdb641d3dd589238": "afa8b110cb4adf128b28397e7a3fd1ca",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/1368ac722a67200ce7f46df0e0fe0fc8cffbb7": "7b9d6853bbb398a660be743d953b807e",
".git/objects/ea/39c63b9c3331dc0d9b58fb43f48332af6aa086": "0cbf44e0eafe184c8dc74e9f696326c3",
".git/objects/cd/43ecf65bc821be491d7b14e7c2a9a142d3b0d8": "77b8be697e5e6f46288d85cc7933c338",
".git/objects/f0/7802ddc9cd0afaaee644d6746a0cf25a5e02c6": "d3eee055650d5bff7e096573c0a2efbf",
".git/objects/f7/b44e8d8bb7bbee181dd1f6d07c5c26ab340ab5": "0b32cbfbdf177b7a08868d80dd5952fa",
".git/objects/fa/d41821dbc02062a3909c41faa32ab7c2143d5d": "6a8f3315fa80dc112945dcdad2021684",
".git/objects/fa/cd557a19319bbf07f8b4d25e679ca4297bafaf": "1354f9253f001da5f5f1624cd64f5a2f",
".git/objects/f6/457708de98040aeccf753fb026ca878206eefc": "2ed33cabb438a7dac6542ba61b2e7cfd",
".git/objects/e9/214c1430ac91d805218b8284b0988b9ede520a": "4ffdc00d8069007a790e05a62798c865",
".git/objects/e9/54b786bdcf7a5770c2b527cb78f9f4f8b3700c": "3eaea03a1e7bd9058af27fa2f57edbac",
".git/objects/e7/f84c5dc6ee3d00cb111edae87d7f4f25e2bad1": "c298b4f913ca14018aa187d4756965a7",
".git/objects/e0/22a2dc04bcfac0239243eef0efcb13761a4825": "b19b6d4ed802a45a492312a0874fb435",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/17feecf2f17088c1a687c53dbacef6c400b02e": "fe2955e6397a638a5e6878162c6b7096",
".git/objects/79/d6a79426298b25e7acb2728690ddaee67b6e6f": "2b294f5ce1a0bfe2800cd9da06567107",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/c1c77b2adbb1d7ae9f308efd24757805706c7a": "4d5ceae058b913ce1d6748360ecfd723",
".git/objects/41/cc20c461029b7fdf0b8413dc5cd5cb6ef2c340": "0bf298f09648486dae87b3bbc3e24fac",
".git/objects/83/cbcf43e769b2da92f45a92ea0801e98745c007": "587205d10aeebfffd27f02498e717631",
".git/objects/1b/4af3e4084f50406d1fa4dbd0c0ad0159ef263c": "b9aa10e6ae4aff1a0a2712ff91ab471a",
".git/objects/77/4cab2deda1092cca781812adfdbd9a4bcbda92": "48cfd351b41dda5786c0befa55b65618",
".git/objects/77/2ee7f430cfae4e2a826ab266a9c4202278e9b9": "7e8b4e91f52abfbcf79128ac44ec0a3c",
".git/objects/48/58e7872eba64b7f7fbaf98efa8c71de6dd8b75": "ade37ba7dab04e09112911dec00f3a1e",
".git/objects/70/84b303922bd929a0f4f9bdc249333ce2f359c0": "b60d3325d2b1bff8fda50b0e4e7c5e31",
".git/objects/70/9f21607acf6bce9c8bb47646984a8c7cb5e8ad": "39f9b641b66aa6243406688e58674272",
".git/objects/84/18448f28c96108c21cff7d1d31376a5977899b": "a1d3fa703759192dd4907a1cc378ce57",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4a/2274091071f56e3004bcdb459f19252fe2cfde": "96665d6b421b94b309c6379e37e1806c",
".git/objects/24/9dcc6bc6a4e01a57d71b8eaa0de70aab86fe86": "2befbb0d4ae71b7762687be51130e4eb",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/12/595e1523cef5064ac9169cd5318731a137e315": "bb3bbe1c2beab6253f99d4f54e01f1aa",
".git/objects/85/772c4d9bf79d5bcf9f22383d04c9a90b279cdf": "ae4d6fe84ffafc786bbaaa44dd3a1d9f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/b0bc899d7368e6f26387d0811e5344ce82fdde": "76e05e57393c1a46a2d882a3775807e1",
".git/objects/1c/dc1765985f757791bf6ad30cde22823a051404": "822c5fe5f8c4ce44368e638c275e4d53",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/b00a08f924e0c9720b4a58c6cef1516217839f": "4234aaed146781b14a00770d33b92669",
".git/objects/2b/42081db39a3e26b539ae6e5e5a7251520b6c13": "869c809846d1a98f680b7db41160c28f",
".git/objects/47/fccf6986aa5574b14c283d4ea92f4b6bdcd235": "7f257dfbbcbf3b6e9228564fa585d024",
".git/objects/47/c019aa6beccf1b095e83e6edca537988f19cb8": "5c3813ec715fa3d3d5e058d6866bd8d7",
".git/objects/7f/b2cfa03196e9f209a41ee28430c981fa16ec79": "d73385543b22c0abb6b0113f5c9f434b",
".git/objects/7f/b90cd84fdd34839e9531f6742e270be629ccf4": "beb1d203914d0583f89f8cbd65e8cec2",
".git/objects/14/798b4b9a83bcab2d7d2a443ec17653d2452dd9": "64b90fb2049817e85bee232c33179639",
".git/objects/14/50491522d2ff92ffbda19e3ab1fb7c52e28e63": "a0b1cd5dec4b914d2ba7695e45009544",
".git/objects/8e/ae996778e3ece791b07133512438c59fccf4e9": "6ddefd09f4e3b54ba1a4abe728358d1e",
".git/objects/22/5509b4a48c0b527239286bfd63658e4228f407": "86bb2708a0a58a3659cc5b15eed9f74d",
".git/objects/22/5bc72cbf7c075b739e068f4b1c83c35b097e66": "9c44365c5737503cfbb2535dc95ddb10",
".git/objects/25/c57072212fc03239fa9ffe74b6a67cea7d3d21": "fd926d8206b15623d3344138e89511db",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d31ce3eabd8f2875a4af0ed5cdebd1a",
".git/logs/refs/heads/main": "2d31ce3eabd8f2875a4af0ed5cdebd1a",
".git/logs/refs/remotes/origin/main": "b6119c999b310e53a89c067c8bf50c87",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "2bac374c2e16e68fed1426d033d8f41a",
".git/refs/remotes/origin/main": "2bac374c2e16e68fed1426d033d8f41a",
".git/index": "9c7f7c8d7749fe5bb043f9351259e815",
".git/COMMIT_EDITMSG": "c5f249bfae195760cd239f428fe96378",
"assets/AssetManifest.json": "f25fe0e0a52b544308617ba995cc4976",
"assets/NOTICES": "f6d0560d5ba1c66b93d1188287c59d30",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "c12a620c25c66bd4410fd1ac3fa0bb85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9477809dfb2d1a005828d2da2691830f",
"assets/fonts/MaterialIcons-Regular.otf": "3f1c84f8ea68b5067590ceb3202c8b90",
"assets/assets/vacio_proveedores.png": "600aa67a81230846572aec538fe26b90",
"assets/assets/logo.png": "4f262fae4bb54fd158300015435c7c52",
"assets/assets/fondos/CreacionDeProducto.svg": "97cf8e18f6646b8036141ef5338946fd",
"assets/assets/fondos/SinInventario.svg": "4d237c2f882cc97a84fdb29992edde48",
"assets/assets/fondos/SinCompras.svg": "d87335d54e37246d7386193780d4c4c3",
"assets/assets/fondos/CreacionDeProveedor.svg": "56511b9fcb984f62fcfb5f12b5465033",
"assets/assets/fondos/SinVentas.svg": "f63481197cae6649eec38ad32229dbaa",
"assets/assets/fondos/SinProveedores.svg": "a23203475c2860a20d1730620e1715d4",
"assets/assets/fondos/SinCuentas.svg": "ef2ae388dea24c98ba253f88e9d184f5",
"assets/assets/fondo.jpeg": "444a751828c82fe4e288cd3828ebda02",
"assets/assets/vacio.png": "0b50460eaeaad1303e75211c7433258d",
"assets/assets/iconos/iconos/CadenaDeSuministro.svg": "e100c7c180de42e6a8120c9e9c768ad2",
"assets/assets/iconos/iconos/Entradas.svg": "815ffb041ac9e472dcf524fd4ccb8a93",
"assets/assets/iconos/iconos/Clientes.svg": "6ddc28a3ca1a371074e5636ca5364124",
"assets/assets/iconos/iconos/Finanzas.svg": "4f207c4648a979b7b335354bd428c743",
"assets/assets/iconos/iconos/Filtros.svg": "5c214590607233121e6b09b7ff3b4de8",
"assets/assets/iconos/iconos/Compras.svg": "7b1162ab0188bd975007313e47f1f3d4",
"assets/assets/iconos/iconos/Contabilidad.svg": "0ce2c239a9c9a0f8d38d710b92dac323",
"assets/assets/iconos/iconos/SeleccionMultiple.svg": "67438a140a92b57249a155a093f65a96",
"assets/assets/iconos/iconos/Usuario.svg": "ddc87b52fccfaaded7bf710120c5c4b5",
"assets/assets/iconos/iconos/Empleados.svg": "68d312a1158672abbab09e7376b113c0",
"assets/assets/iconos/iconos/Descargar.svg": "5f683154df3dc70622722a6a198091b9",
"assets/assets/iconos/iconos/Salidas.svg": "f7fab2578157227d038ce466596b6e23",
"assets/assets/iconos/iconos/Insumo.svg": "e34a2a9feb01286e54313ad5fbcbaead",
"assets/assets/iconos/iconos/ModoCuadricula.svg": "a12808fda562f87896db83a67a473a73",
"assets/assets/iconos/iconos/ModoLista.svg": "1effeb98b828a6cc9e07937ed55fc36d",
"assets/assets/iconos/iconos/Eliminar2.svg": "cdbb6756bb396caa7781b654fff75a32",
"assets/assets/iconos/iconos/Ventas.svg": "f4c93c4612136df5ee1e1d1a3cfed8d7",
"assets/assets/iconos/iconos/MovimientosInternos.svg": "de26a41f89ab457310fa946faaa91981",
"assets/assets/iconos/iconos/Favoritos1.svg": "6c9cb57857e41bc3dcef21400f6f14e7",
"assets/assets/iconos/iconos/Regresar.svg": "55817b8462cc06f5d7e95fff08b240cb",
"assets/assets/iconos/iconos/Eliminar1.svg": "f7d62e0a1db9a781900c3ec8e32eb2e4",
"assets/assets/iconos/iconos/Favoritos3.svg": "6b1752467d7a7a168c892e3fbace40fa",
"assets/assets/iconos/iconos/Favoritos2.svg": "a4f28f959600d89ea8b19df5b3101d08",
"assets/assets/iconos/iconos/Calculadora.svg": "9c025eb494d2b07d2a515c76e97d03ec",
"assets/assets/iconos/iconos/Ajustes.svg": "fc64290ec33e52c5bc9006a978d8a249",
"assets/assets/iconos/iconos/Notificaciones.svg": "72d6800197a2605cd35da6835c273e51",
"assets/assets/iconos/iconos/Consumible.svg": "67f5a18f0a8451621c09087af6deb8a6",
"assets/assets/iconos/iconos/Calendario.svg": "26dd51a484e8fb00a7e1217115697f3b",
"assets/assets/iconos/iconos/Buscar.svg": "1d53d691eb79c5d438a04cf4684d35ee",
"assets/assets/iconos/iconos/MenuPrincipal.svg": "39785ed926a7a4c310d1f5cc8fd50830",
"assets/assets/iconos/iconos/Refrescar.svg": "3db00b2aa76c5c30b72768cea0ae2780",
"assets/assets/iconos/iconos/Fabricacion.svg": "e5f0af096ed8b32c9841e1eb2a53c963",
"assets/assets/iconos/iconos/Ayuda.svg": "b10532eb404c723ed715b8cca5d4e19d",
"assets/assets/iconos/iconos/Imprimir.svg": "b5d28d9e30457bb82025ad1785940b1c",
"assets/assets/iconos/iconos/Almacenable.svg": "fbf58f6cc91b9e6329820d749c6f0833",
"assets/assets/iconos/iconos/Inventario.svg": "0e2f7a68032a00fcb2637fab70a858c4",
"assets/assets/iconos/iconos/Aceptar.svg": "a226a8ab6860d800006aab6d1eeddd2c",
"assets/assets/iconos/iconos/Terminado.svg": "fdde1c5775e99294aabe2ed4278cc3bf",
"assets/assets/logo.jpeg": "c97290d204b0a7e0b9558346cc830135",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
