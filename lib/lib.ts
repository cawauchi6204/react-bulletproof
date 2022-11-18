export function envCheck(targetString: String) {
	const envString = import.meta.env.VITE_HOGE_STRING
	return envString == targetString
}

export function calc(targetInt: number) {
	return targetInt ** 2
}