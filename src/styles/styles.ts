export const STYLES = {
  FLEX_CENTER: `
		display: flex;
		justify-content: center;
		align-items: center;
	`,
  FLEX_ALIGN_CENTER: `
		display: flex;
		align-items: center;
	`,
  FLEX_JUSTIFY_CENTER: `
		display: flex;
		justify-content: center;
	`,
  ABSOLUTE_CENTER: `
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	`,
  TEXT_ELLIPSIS: `
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	`,
} as const;
