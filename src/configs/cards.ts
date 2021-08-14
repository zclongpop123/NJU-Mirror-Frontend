import axios from 'axios';
import {serverPrefix} from '@/configs/common';
import type {CardItem, LinkItem} from './common';


const esci: Promise<CardItem> = axios.get(serverPrefix + 'cards/esci.json').then(
  res => new Promise(resolve => resolve(res.data)),
);

const friends: Promise<CardItem> = axios.get(serverPrefix + 'cards/friends.json').then(
  res => new Promise(resolve => resolve(res.data)),
);

const jokes = axios.get('https://git.nju.edu.cn/api/v4/projects/2412/issues').then(
  res => new Promise(resolve => {
    const links = (res.data as Array<{ title: string, web_url: string }>).map(
      value => <LinkItem>{
        title: value.title,
        url: value.web_url,
      });
    resolve({
      title: 'LUG Jokes',
      url: 'https://git.nju.edu.cn/nju-lug',
      links: links.slice(0, 5)
    });
  }),
  err => new Promise((resolve, reject) => reject(err)),
);

export default <Array<Promise<CardItem>>>[
  esci,
  friends,
  jokes,
];
