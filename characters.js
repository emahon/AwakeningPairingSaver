var charactersOriginal = [
	{ 
		name : "Avatar-m",
		married : false,
		pool : "avatar-m",
		canMarry : ["sumia", "chrom-pool", "main-female", "child-female", "avatar-m-pool"],
		exists: false
	},
	{
		name : "Avatar-f",
		married : false,
		pool : "avatar-f",
		canMarry : ["chrom", "sumia-pool", "main-male", "child-male", "avatar-f-pool"],
		exists: false
	},
	{	
		name : "Chrom",
		married : false,
		pool : "chrom",
		canMarry : ["avatar-f", "sumia", "chrom-pool"],
		exists: true
	},
	{
		name : "Lissa",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Frederick",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"],
		exists: true
	},	
	{
		name : "Sully",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Virion",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Stahl",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Vaike",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Miriel",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Sumia",
		married : false,
		pool : "sumia",
		canMarry : ["avatar-m", "chrom", "sumia-pool"],
		exists: true
	},
	{
		name : "Kellam",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Donnel",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Lon'qu",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Ricken",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Maribelle",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Panne",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Gaius",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Cordelia",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Gregor",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Nowi",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Libra",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Tharja",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Anna",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Olivia",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Cherche",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"],
		exists: true
	},
	{
		name : "Henry",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"],
		exists: true
	},
	{
		name : "Lucina",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		exists: true
	},
	{
		name : "Say'ri",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Tiki",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Basilio",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"],
		exists: true
	},
	{
		name : "Flavia",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Owain",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Lissa",
		exists: false
	},
	{
		name : "Inigo",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Olivia",
		exists: false
	},
	{
		name : "Brady",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Maribelle",
		exists: false
	},
	{
		name : "Kjelle",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Sully",
		exists: false
	},
	{
		name : "Cynthia",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Sumia",
		exists: false
	},
	{
		name : "Severa",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Cordelia",
		exists: false
	},
	{
		name : "Gerome",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Cherche",
		exists: false
	},
	{
		name : "Morgan",
		married : false,
		pool : "morgan-m",
		canMarry : ["child-female"],
		parent : "Avatar-f",
		exists: false
	},
	{
		name : "Morgan",
		married : false,
		pool : "morgan-f",
		canMarry : ["child-male"],
		parent : "Avatar-m",
		exists: false
	},
	{
		name : "Yarne",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Panne",
		exists: false
	},
	{
		name : "Laurent",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Miriel",
		exists: false
	},
	{
		name : "Noire",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Tharja",
		exists: false
	},
	{
		name : "Nah",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Nowi",
		exists: false
	},
	{
		name : "Gangrel",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"],
		exists: true
	},
	{
		name : "Walhart",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"],
		exists: true
	},
	{
		name : "Emmeryn",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Yen'fay",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"],
		exists: true
	},
	{
		name : "Aversa",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"],
		exists: true
	},
	{
		name : "Priam",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"],
		exists: true
	}
]
