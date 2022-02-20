/**
 * @returns [initial, middle, final]
 * all may be undefined if none exists there
 */
export const decompose = (code: number): [number, number, number] => [
	Math.floor((code - 0xac00) / 588),
	Math.floor((code - 0xac00) / 28) % 21,
	(code - 0xac00) % 28,
];

export const strokeCount = (parts: [number, number, number]) =>
	strokeCountInitial[parts[0]] +
	strokeCountMiddle[parts[1]] +
	strokeCountFinal[parts[2]];

export const strokeCountInitial = [
	1 /* ㄱ */, 2 /* ㄲ */, 1 /* ㄴ */, 2 /* ㄷ */, 4 /* ㄸ */, 3 /* ㄹ */,
	3 /* ㅁ */, 4 /* ㅂ */, 8 /* ㅃ */, 2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */,
	3 /* ㅈ */, 6 /* ㅉ */, 4 /* ㅊ */, 2 /* ㅋ */, 3 /* ㅌ */, 4 /* ㅍ */,
	3 /* ㅎ */,
];

export const strokeCountMiddle = [
	2 /* ㅏ */, 3 /* ㅐ */, 3 /* ㅑ */, 4 /* ㅒ */, 2 /* ㅓ */, 3 /* ㅔ */,
	3 /* ㅕ */, 4 /* ㅖ */, 2 /* ㅗ */, 4 /* ㅘ */, 5 /* ㅙ */, 3 /* ㅚ */,
	3 /* ㅛ */, 2 /* ㅜ */, 4 /* ㅝ */, 5 /* ㅞ */, 3 /* ㅟ */, 3 /* ㅠ */,
	1 /* ㅡ */, 2 /* ㅢ */, 1 /* ㅣ */,
];

export const strokeCountFinal = [
	0 /*    */, 1 /* ㄱ */, 2 /* ㄲ */, 3 /* ㄳ */, 1 /* ㄴ */, 4 /* ㄵ */,
	4 /* ㄶ */, 2 /* ㄷ */, 3 /* ㄹ */, 4 /* ㄺ */, 6 /* ㄻ */, 7 /* ㄼ */,
	5 /* ㄽ */, 6 /* ㄾ */, 7 /* ㄿ */, 6 /* ㅀ */, 3 /* ㅁ */, 4 /* ㅂ */,
	6 /* ㅄ */, 2 /* ㅅ */, 4 /* ㅆ */, 1 /* ㅇ */, 3 /* ㅈ */, 4 /* ㅊ */,
	2 /* ㅋ */, 3 /* ㅌ */, 4 /* ㅍ */, 3 /* ㅎ */,
];
