type OptionFlags<T> = {
	[Property in keyof T]: boolean;
};

type Features = {
	darkMode: () => {};
	newUserProfile: () => {};
};

type FeatureOptions = OptionFlags<Features>;

