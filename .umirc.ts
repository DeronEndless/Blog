import { IConfig } from 'umi-types';
import moment from 'moment';

const RELEASE_TAG = moment().format('YYYY-MM-DD-HH-mm')

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' }
      ]
    }
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'blog-deron',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
    ['umi-plugin-rehash', {
      hash: RELEASE_TAG,
      mode: 'query',
    }],
  ],
}

export default config;
