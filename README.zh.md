# **Video Metadata & Thumbnails**

[![Latest Version on NPM](https://img.shields.io/npm/v/video-metadata-thumbnails.svg?style=flat-square)](https://npmjs.com/package/video-metadata-thumbnails)
[![Download Count](https://img.shields.io/npm/dt/video-metadata-thumbnails.svg)](https://www.npmjs.com/package/video-metadata-thumbnails)
[![issue](https://img.shields.io/badge/bug-issue-red.svg)](https://github.com/wangweiwei/video-metadata-thumbnails/issues)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/video-metadata-thumbnails/blob/master/LICENSE)
[![Dependency Status](https://david-dm.org/wangweiwei/video-metadata-thumbnails.svg)](https://david-dm.org/wangweiwei/video-metadata-thumbnails)
[![devDependency Status](https://david-dm.org/wangweiwei/video-metadata-thumbnails/dev-status.svg)](https://david-dm.org/wangweiwei/video-metadata-thumbnails?type=dev)

通过HTML5的Blob获取音视频元数据和帧缩略图（仅视频）。

[English](https://github.com/wangweiwei/video-metadata-thumbnails/blob/master/README.md) | 简体中文

## **安装**

```shell
npm install --save video-metadata-thumbnails
```

or

```
yarn add video-metadata-thumbnails
```

## **使用方法**

### 通过getMetadata和getThumbnails方法

​	将 `video-metadata-thumbnails.iife.js` 添加到你的`script`标签中，然后通过`Promise`的 `then`获取 元数据或者视频缩略图：

```html
<input type="file" onchange="onChange(this.files)" />
<script src="your cdn path/video-metadata-thumbnails.iife.js"></script>
<script>
function onChange(files) {
  __video_metadata_thumbnails__.getMetadata(files[0]).then(function(metadata) {
    console.log('Metadata: ', metadata);
  })
  __video_metadata_thumbnails__.getThumbnails(files[0]).then(function(thumbnails) {
    console.log('Thumbnails: ', thumbnails);
  })
}
</script>
```

​	当然你可以通过`import`（或者`reqire`)`video-metadata-thumbnails` 来使用：

```javascript
import { getMetadata, getThumbnails } from 'video-metadata-thumbnails';
  
const metadata = await getMetadata(blob);
const thumbnails = await getThumbnails(blob, {
  quality: 0.6
});
console.log('Metadata: ', metadata);
console.log('Thumbnails: ', thumbnails);
```

### 通过Video对象

​	通过导入`Video`来自行初始化视频对象，然后通过`getMetadata`和`getThumbnails`获取元数据和帧缩略图：

```      javascript
import { Video } from 'video-metadata-thumbnails';

const video = new Video(blob);
console.log('Metadata:', await video.getMetadata());
console.log('Thumbnails:', await video.getThumbnails({
  quality: 0.6
}))
```

## **缩略图选项**

* quality
  * 类型: number
  * 默认值: 0.7
  * 描述: 视频缩略图的质量
* interval
  * 类型: number
  * 默认值: 1
  * 描述: 获取帧图片的时间间隔
* scale
  * 类型: number
  * 默认值: 0.7
  * 描述: 帧图片的缩放值
* start
  * 类型: number
  * 默认值: 0
  * 描述: 获取帧图片的起始帧
* end
  * 类型: number
  * 默认值: 0
  * 描述: 获取帧图片的终止帧

## **例子**

[![Software License](https://img.shields.io/badge/点我-看例子-red.svg)](https://www.ellow.cn/examples/video-metadata-thumbnails/index.html)

## **⚠️  注意**
​	需要浏览器支持`Blob`对象

## **许可**

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](https://github.com/wangweiwei/video-metadata-thumbnails/blob/master/LICENSE)

Copyright (c) 2020-present, Weiwei Wang 
