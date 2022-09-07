import type { DefaultSize } from '../global/size';

export { default as Button } from './index.svelte';

// Model 추가 될 수 있다.

export interface ButtonProps {
	text: string;
	color: string;
	size: string;
	onClick: () => void;
}

export type ButtonSize = DefaultSize | 'a';
