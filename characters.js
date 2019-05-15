var charactersOriginal = [
	{ 
		name : "Avatar-m",
		married : false,
		pool : "avatar-m",
		canMarry : ["sumia", "chrom-pool", "main-female", "child-female", "avatar-m-pool"]
	},
	{
		name : "Avatar-f",
		married : false,
		pool : "avatar-f",
		canMarry : ["chrom", "sumia-pool", "main-male", "child-male", "avatar-f-pool"]
	},
	{	
		name : "Chrom",
		married : false,
		pool : "chrom",
		canMarry : ["avatar-f", "sumia", "chrom-pool"]
	},
	{
		name : "Lissa",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Frederick",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"]
	},	
	{
		name : "Sully",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"]
	},
	{
		name : "Virion",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Stahl",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Vaike",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Miriel",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Sumia",
		married : false,
		pool : "sumia",
		canMarry : ["avatar-m", "chrom", "sumia-pool"]
	},
	{
		name : "Kellam",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Donnel",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Lon'qu",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Ricken",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Maribelle",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"]
	},
	{
		name : "Panne",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Gaius",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"]
	},
	{
		name : "Cordelia",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Gregor",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Nowi",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Libra",
		married : false,
		pool : "main-male",
		canMarry : ["avatar-f", "chrom-pool", "main-female"]
	},
	{
		name : "Tharja",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Anna",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Olivia",
		married : false,
		pool : "chrom-pool",
		canMarry : ["avatar-m", "chrom", "sumia-pool", "main-male"]
	},
	{
		name : "Cherche",
		married : false,
		pool : "main-female",
		canMarry : ["avatar-m", "sumia-pool", "main-male"]
	},
	{
		name : "Henry",
		married : false,
		pool : "sumia-pool",
		canMarry : ["avatar-f", "sumia", "chrom-pool", "main-female"]
	},
	{
		name : "Lucina",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"]
	},
	{
		name : "Say'ri",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Tiki",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Basilio",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"]
	},
	{
		name : "Flavia",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Owain",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Lissa"
	},
	{
		name : "Inigo",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Olivia"
	},
	{
		name : "Brady",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Maribelle"
	},
	{
		name : "Kjelle",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Sully"
	},
	{
		name : "Cynthia",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Sumia"
	},
	{
		name : "Severa",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Cordelia"
	},
	{
		name : "Gerome",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Cherche"
	},
	{
		name : "Morgan",
		married : false,
		pool : "morgan-m",
		canMarry : ["child-female"],
		parent : "Avatar-f"
	},
	{
		name : "Morgan",
		married : false,
		pool : "morgan-f",
		canMarry : ["child-male"],
		parent : "Avatar-m"
	},
	{
		name : "Yarne",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Panne"
	},
	{
		name : "Laurent",
		married : false,
		pool : "child-male",
		canMarry : ["avatar-f", "morgan-f", "child-female"],
		parent : "Miriel"
	},
	{
		name : "Noire",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Tharja"
	},
	{
		name : "Nah",
		married : false,
		pool : "child-female",
		canMarry : ["avatar-m", "morgan-m", "child-male"],
		parent : "Nowi"
	},
	{
		name : "Gangrel",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"]
	},
	{
		name : "Walhart",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"]
	},
	{
		name : "Emmeryn",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Yen'fay",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"]
	},
	{
		name : "Aversa",
		married : false,
		pool : "avatar-m-pool",
		canMarry : ["avatar-m"]
	},
	{
		name : "Priam",
		married : false,
		pool : "avatar-f-pool",
		canMarry : ["avatar-f"]
	}
]
