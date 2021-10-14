import mockjs from 'mockjs';
export default {
  '/api/getButton': [
    { name: 'song-btn-1', title: 'song-btn-1' },
    { name: 'song-btn-2', title: 'song-btn-2' },
    { name: 'song-btn-3', title: 'song-btn-3' },
    { name: 'song-btn-4', title: 'song-btn-4' },
    { name: 'song-btn-5', title: 'song-btn-5' },
  ],
  'POST /api/tags': mockjs.mock({
    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],
  }),
};
