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
  FLEX_DIRECTION_COLUMN: `
		display: flex;
  	flex-direction: column;
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
  LAYOUT: `
  padding: 2.5rem 1rem 4.375rem 1rem;
	`,
} as const;
