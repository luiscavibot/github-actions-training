// src/utils/getHost.ts
import { headers } from 'next/headers';

export function getHost() {
	const headersList = headers();
	const host = headersList.get('host');
	return host || '';
}
