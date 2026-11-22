import { getStore } from '@netlify/blobs';
import tower from '../lib/tower.js';
export default async () => { await tower.runOnce(getStore('tower'), false, getStore('mt5-trading')); };
export const config = { schedule: '2,17,32,47 * * * *' };
