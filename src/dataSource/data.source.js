import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;
import { SearchOutlined } from '@ant-design/icons';
export const Nav00DataSource = {
  wrapper: { className: 'header0 home-page-wrapper' },
  page: { className: 'home-page kurrlja8fqd-editor_css' },
  logo: {
    className: 'header0-logo',
    children: 'Songs',
    href: '/home/index',
  },
  Menu: {
    className: 'header0-menu',
    children: [
      {
        name: 'item0',
        className: 'header0-item',
        children: {
          href: '/home/blog',
          children: [{ children: '博文', name: 'text' }],
        },
      },
      {
        name: 'item1',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: 'Antd', name: 'text' }],
        },
        subItem: [
          {
            name: 'sub0',
            className: 'item-sub',
            children: {
              className: 'item-sub-item',
              children: [
                {
                  name: 'image0',
                  className: 'item-image',
                  children:
                    'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg',
                },
                {
                  name: 'title',
                  className: 'item-title',
                  children: 'Ant Design',
                },
                {
                  name: 'content',
                  className: 'item-content',
                  children: '企业级 UI 设计体系',
                },
              ],
            },
          },
        ],
      },
      {
        name: 'item2',
        className: 'header0-item',
        children: {
          href: 'https://gitee.com/songsshao/tcmp.git',
          children: [{ children: '仓库', name: 'text' }],
        },
      },
      {
        name: 'item3',
        className: 'header0-item',
        children: {
          href: '#',
          children: [{ children: '个人中心', name: 'text' }],
        },
      },
      {
        name: 'item4',
        className: 'header0-item',
        children: {
          href: '/acupuncture/main',
          children: [{ children: '针灸十二时辰', name: 'text' }],
        },
      },
      {
        name: 'item5',
        className: 'header0-item',
        children: {
          href: '#',
          children: [
            {
              children: <SearchOutlined></SearchOutlined>,
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header0-mobile-menu' },
};
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: 'songs',
  },
  content: {
    className: 'banner0-content',
    children: '路漫漫其修远兮，吾将上下而求索。',
  },
  button: { className: 'banner0-button', children: 'Learn More' },
};
export const Content10DataSource = {
  wrapper: { className: 'home-page-wrapper content1-wrapper' },
  OverPack: { className: 'home-page content1', playScale: 0.3 },
  imgWrapper: { className: 'content1-img', md: 10, xs: 24 },
  img: {
    children: require('../asset/img/1EC47D5E-1ECF-404E-96A4-CF25DE073784.png'),
  },
  textWrapper: { className: 'content1-text', md: 14, xs: 24 },
  title: { className: 'content1-title', children: '企业资源管理' },
  content: {
    className: 'content1-content',
    children:
      '云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。云资源集中编排、弹性伸缩、持续发布和部署，高可用及容灾。',
  },
};
export const Footer00DataSource = {
  wrapper: { className: 'home-page-wrapper footer0-wrapper' },
  OverPack: { className: 'home-page footer0', playScale: 0.05 },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        ©2021 <a href="#">Songs</a> All Rights Reserved
      </span>
    ),
  },
};
export const BlogDataSource = {
  newBlog: [
    { name: 'antd Table use', time: '2021-10-20 17:34:56' },
    { name: 'antd Form use', time: '2021-10-19 17:34:56' },
  ],
  friendUrl: [
    {
      url: 'https://blog.csdn.net/qq_35490191?spm=1000.2115.3001.5343',
      name: 'song.shao',
    },
    { url: 'https://www.mukang.net.cn/', name: 'mukang' },
  ],
};
