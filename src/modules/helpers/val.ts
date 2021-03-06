/*!
 * Jodit Editor (https://xdsoft.net/jodit/)
 * Licensed under GNU General Public License version 2 or later or a commercial license or MIT;
 * For GPL see LICENSE-GPL.txt in the project root for license information.
 * For MIT see LICENSE-MIT.txt in the project root for license information.
 * For commercial licenses see https://xdsoft.net/jodit/commercial/
 * Copyright (c) 2013-2020 Valeriy Chupurnov. All rights reserved. https://xdsoft.net
 */

export const val = (
	elm: HTMLInputElement | HTMLElement,
	selector: string,
	value?: string
): string => {
	const child = elm.querySelector(selector) as HTMLInputElement;

	if (!child) {
		return '';
	}

	if (value) {
		child.value = value;
	}

	return child.value;
};
