export const isCharactersData = (data: any) => {
	return data?.data && data?.data?.results;
};

export const hasTotal = (data: any) => {
	return data?.data && data?.data?.total;
};

export const isComicsData = (data: any) => {
	return data?.data && data?.data?.results;
};
