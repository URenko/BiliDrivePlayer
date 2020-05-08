canplay = true;
firstplay = true;

const ap = new APlayer({
	container: document.getElementById('aplayer'),
	listFolded: false,
	listMaxHeight: '100%',
	audio: [{
		name: 'Bad apple!!',
		url: ['https://i0.hdslb.com/bfs/album/ff21fe34872ac884cef7b296a0f706f6881d94fd.png','https://i0.hdslb.com/bfs/album/0247a1d25b0043bc6e7a0346c46eb794459fe0c8.png','https://i0.hdslb.com/bfs/album/f99f30bf6b768675bb0a4ccd85ecb5fbff33a0b8.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻响夜宴「薄醉的上海雾曲」',
		url: ['https://i0.hdslb.com/bfs/album/61cdc29407495c5b06dbc50d7b1e09b9a14a5dbb.png','https://i0.hdslb.com/bfs/album/77cec3eaba88838ef4559d00582fed03dab08f73.png','https://i0.hdslb.com/bfs/album/4afe8096b388c0175838f953dccbf6b9e8d0db8d.png',
		'https://i0.hdslb.com/bfs/album/ab1a5cd4677c2e21f422f7aaa28692af66af3a6e.png','https://i0.hdslb.com/bfs/album/5e004d103440df335b6435d343f035b097913690.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻视绮宴「悠雅的蓬莱旅梦」',
		url: ['https://i0.hdslb.com/bfs/album/9b6b8de1d4912a2bb9063cab1f976694bbf57d34.png', 'https://i0.hdslb.com/bfs/album/0b3e7348cdcb816748422a3e26ec9e5c6436c968.png', 'https://i0.hdslb.com/bfs/album/15be6908088f6a94d31a688cf832ce0298593d91.png', 'https://i0.hdslb.com/bfs/album/93422046bd83f4f447c891e5418dea0f60cf12ea.png', 'https://i0.hdslb.com/bfs/album/34ba34535e759be2bc4d56a30f37488bf7e3022c.png', 'https://i0.hdslb.com/bfs/album/d790d84eb189a282306d752c180a397477c1490a.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻韵游宴「神妙的诹访巡礼」',
		url: ['https://i0.hdslb.com/bfs/album/6188890676570979cc3f6d8b42e301953a3724f5.png', 'https://i0.hdslb.com/bfs/album/6136c7e3c5e86db0282ec09219ac7d927ba1e767.png', 'https://i0.hdslb.com/bfs/album/e9ac24e99e4eaf772879655653e110ea4ccdce6c.png', 'https://i0.hdslb.com/bfs/album/7db52f62481a6d0589f946dc5b3d9abb9316a93f.png', 'https://i0.hdslb.com/bfs/album/ec8df2b141ca4a6627022c251e756deb0cda6c7a.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻景时宴「自在的秋瀑溯流」',
		url: ['https://i0.hdslb.com/bfs/album/008137cd59450abd1f5f2b23c0c15a75525235b1.png', 'https://i0.hdslb.com/bfs/album/da46f7558b078a6545f1a7a1eb0c29ebc416237e.png', 'https://i0.hdslb.com/bfs/album/d79464029d92664a618c72065d2f0fa669862401.png', 'https://i0.hdslb.com/bfs/album/19d2b424ec02c14945f42382b873dda5059aaf05.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻觉荒宴「酣畅的灼热挽歌」',
		url: ['https://i0.hdslb.com/bfs/album/287ebdd6e89c41cf290733c7e43415eacc525065.png', 'https://i0.hdslb.com/bfs/album/556fe189dd6cf79c5333b944e149744906313880.png', 'https://i0.hdslb.com/bfs/album/871769922f2a6d86238d1f31e88ca46907da987b.png', 'https://i0.hdslb.com/bfs/album/59ff03ff026f890eeb3d683c54e4e9f00f03fbf1.png', 'https://i0.hdslb.com/bfs/album/47df28b9f513005cf7aabfc28b71b0d3fb371114.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '幻听妖宴「反转的辉针响诗」',
		url: ['https://i0.hdslb.com/bfs/album/0a20a7240b3995b626a70f519024e37d3d0b4024.png', 'https://i0.hdslb.com/bfs/album/814c3c66a96f19fdae232b9321d80f17fa0f0462.png', 'https://i0.hdslb.com/bfs/album/ec2f37d0f79aa6482a5e8b7b641e154a950d3873.png', 'https://i0.hdslb.com/bfs/album/46bdda635493dfabbc476a7e4baaba02a0ef36ae.png', 'https://i0.hdslb.com/bfs/album/522a3599ca80b6888f3e699b5fccb75389839e4c.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '厄里倪厄斯的纯心',
		url: ['https://i0.hdslb.com/bfs/album/1f11a4104f5f1ade637e08de1caafaaac95e1e18.png', 'https://i0.hdslb.com/bfs/album/057272077bb8d80dce8f5211e6513acd11680448.png', 'https://i0.hdslb.com/bfs/album/df5a945b1985e21e4e90887090df6582ebd6746d.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '鵺的混沌旋律',
		url: ['https://i0.hdslb.com/bfs/album/f5d2d1d5f785b449b246a5e5058717fcca880550.png', 'https://i0.hdslb.com/bfs/album/55bc4f2e79ea5c50010b189c1e8102a6b2824496.png', 'https://i0.hdslb.com/bfs/album/a98d3a721148dcb74e409842a399c6bac83d1dce.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '天衣無縫',
		url: ['https://i0.hdslb.com/bfs/album/a8a85fe9b5a358843fe8170ad202cc0d75d7bebf.png', 'https://i0.hdslb.com/bfs/album/4af6a33b68e59cfabed9a33d750b52c7686654fa.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '砕月',
		url: ['https://i0.hdslb.com/bfs/album/068b847e30ff272d36b124f4778740e7d57c2e6b.png', 'https://i0.hdslb.com/bfs/album/ae1e312c0cdbc27af43e211bf04aa5064c9446d2.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '天空的花之都 -PHANTOM ENSEMBLE',
		url: ['https://i0.hdslb.com/bfs/album/41f110ce5568cccdb4b5184eefd9d95024376caa.png', 'https://i0.hdslb.com/bfs/album/e93dfccfc08938173bea87b95184533f5d6944bf.png', 'https://i0.hdslb.com/bfs/album/dde18eb8dcfd01d24770ee2028bc19beb498b2c6.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: 'Border of Life 『Life side』',
		url: ['https://i0.hdslb.com/bfs/album/e3d2069a884b7e0179ce5708ebc60808c848ce7a.png', 'https://i0.hdslb.com/bfs/album/9b1946d00867c0478bbf33fcee3ebe4a7e3d56e0.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: 'Alice of Alice',
		url: ['https://i0.hdslb.com/bfs/album/a9ac43851de4c017c7b42df4417d534fd3bc798a.png', 'https://i0.hdslb.com/bfs/album/66c82e7c6690c439d1e117c187080ab84f254f1e.png', 'https://i0.hdslb.com/bfs/album/c83a27b30cd5ff5cf79ced9cd9bfa719c159b97d.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '于东方遥瞰幻想乡',
		url: ['https://i0.hdslb.com/bfs/album/b8034f7c72f5e03c3f76895b63f1b0a76d2b385a.png', 'https://i0.hdslb.com/bfs/album/22a41bbde96cde57e79724bb2e204d2e6a743605.png', 'https://i0.hdslb.com/bfs/album/3f706a151e4b7db72a06f9ba6d6aae4ced171044.png', 'https://i0.hdslb.com/bfs/album/dfa6e709de09dc831bc028ff1760d1ca93774dd6.png', 'https://i0.hdslb.com/bfs/album/af163f937df7f21c6177981a5a7d86cf054c6930.png', 'https://i0.hdslb.com/bfs/album/3bb82abba266283e781aaf1d15e20097bd7a594f.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '天空的格林尼治',
		url: ['https://i0.hdslb.com/bfs/album/86fcd4bcfa6d84702f4c2f4282bdf59173dc167d.png', 'https://i0.hdslb.com/bfs/album/ffd1258d4817e575fa7ca4c0c40d79afb4c5dd15.png', 'https://i0.hdslb.com/bfs/album/3eac600dc8eeb8bd877ad0c6cbae87c752c961e3.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '童祭',
		url: ['https://i0.hdslb.com/bfs/album/a8e258ca435dbd0596f6413c1372bc82713f4918.png', 'https://i0.hdslb.com/bfs/album/70609a35a67a13691f396b86f48794ca753761b0.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '春之岸边',
		url: ['https://i0.hdslb.com/bfs/album/f46d2be594dc5b4b52a3c39be48f944999ff7308.png', 'https://i0.hdslb.com/bfs/album/86a3fbd8aeb20826a103ddbb831e84123f0183e8.png', 'https://i0.hdslb.com/bfs/album/0656ef4ca3c3961b323b58f31c5f6b9d2152bd37.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '千年幻想交响祭',
		url: ['https://i0.hdslb.com/bfs/album/ee79acd9c0a015a35fc8ddb146851c8598d0a4ed.png', 'https://i0.hdslb.com/bfs/album/5de0eb5c2bdf27998d5e94f63bc9cbd52a94460e.png', 'https://i0.hdslb.com/bfs/album/96db8ebe513724c49a93bc679a59e571fa4b838a.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	},
	{
		name: '科学世纪的少年少女',
		url: ['https://i0.hdslb.com/bfs/album/e19c30b947cfe7de0fab724259ea5d96d05a5091.png', 'https://i0.hdslb.com/bfs/album/f98a6ae06dd277f5c1a3efcfe30e6f765d769075.png', 'https://i0.hdslb.com/bfs/album/e1c17e9600a10ebfb2f5858e5ef0dae976bcae0b.png'],
		cover: 'https://upload.thwiki.cc/4/4f/幻奏盛宴·幻想交响音乐会1LOGO.jpg',
		type: 'customHls'
	}
	],
	customAudioType: {
		'customHls': function (audioElement, audio, player) {
			let paused = player.paused;
			console.log('paused', paused);
			URL.revokeObjectURL(audioElement.src);
			canplay = false;
			audioElement.pause();
			console.log(audio.url);
			lenFetch = audio.url.length;
			window.alldata = [];
			audio.url.forEach(function(url, index){
				fetch(url).then(function(response) {
					response.arrayBuffer().then(function(buffer) {
					  let data = UPNG.decode(buffer)['data'];
					  let sz = new Uint32Array(data.slice(0,4).buffer)[0];
					  window.alldata[index] = data.slice(4,4+sz);
					  lenFetch -= 1;
					  if(lenFetch == 0){
						  window.b = new Blob(window.alldata, {type: 'audio/flac'});
						  //SHA1校验
						  var a = new FileReader();
							a.readAsBinaryString(window.b);
							a.onloadend = function () {
							  console.log(CryptoJS.SHA1(CryptoJS.enc.Latin1.parse(a.result)).toString());
							};
							//
						  audioElement.src = URL.createObjectURL(window.b);
						  console.log(window.b);
						  console.log('OK');
						  canplay = true;
						  // APlayer.min.js
						  player.seek(0);
						  player.play();
					  }
					});
				})
			})
		}
	}
});

ap.on('play', function () {
	console.log('canplay', canplay);
    if(!canplay && !firstplay){
		ap.pause();
	}
	firstplay = false;
});