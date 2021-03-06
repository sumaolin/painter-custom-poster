import _ from 'lodash';
let optionArr = [
  {
    type: 'canvas',
    name: '画布',
    css: {
      width: '654',
      height: '1000',
      background: '#f8f8f8',
      times: '1'
    }
  },
  {
    type: 'text',
    name: '文字',
    css: {
      text: '别跟我谈感情，谈感情伤钱。',
      width: 200,
      maxLines: 2, //最大行数
      lineHeight: 1.3, //行间距
      left: 0,
      top: 250,
      color: '#000000',
      background: 'rgba(0,0,0,0)',
      fontSize: 30,
      fontWeight: ['normal', 'bold'], //文字加粗 可以不写
      textDecoration: ['none', 'overline', 'underline', 'linethrough'], //overline underline line-through 可组合
      rotate: 0,
      //padding: 0,
      borderRadius: 0,
      borderWidth: 0,
      borderColor: '#000000',
      shadow: '', // 10 10 5 #888888
      textStyle: ['fill', 'stroke'], //fill： 填充样式，stroke：镂空样式
      textAlign: ['left', 'center', 'right'], //文字的对齐方式，分为 left, center, right
      fontFamily: '' //
    }
  },
  {
    type: 'rect',
    name: '矩形',
    css: {
      //background: 'linear-gradient(190deg, rgba(243, 227, 223, 1) 20%, rgba(238, 214, 205, 1) 80%)',
      //background: 'radial-gradient(rgba(0, 0, 0, 0) 5%, #0ff 15%, #f0f 60%)',
      width: 200,
      height: 122, //高度,没有的话就自适应
      left: 452,
      top: 250,
      background: '#f8d4d4',
      rotate: 0,
      borderRadius: 0,
      borderWidth: 0,
      borderColor: '#ff0000',
      shadow: '' //阴影
    }
  },
  {
    type: 'image',
    name: '图片',
    css: {
      url:
        'https://desk-fd.zol-img.com.cn/t_s960x600c5/g5/M00/0F/08/ChMkJlauzXWIDrXBAAdCg2xP7oYAAH9FQOpVAIAB0Kb342.jpg',
      width: 320,
      height: 200, //高度,没有的话就自适应
      left: 200,
      top: 400,
      rotate: 0,
      borderRadius: 0,
      borderWidth: 0,
      borderColor: '#000000',
      shadow: '', //阴影
      mode: ['scaleToFill', 'aspectFill', 'auto']
    }
  },
  {
    type: 'qrcode',
    name: '二维码',
    css: {
      url: '哈哈哈',
      width: 200,
      left: 454,
      top: 403,
      color: '#000000', //字体颜色 linear-gradient(-135deg, #fedcba 0%, rgba(18, 52, 86, 1) 20%, #987 80%)
      background: '#ffffff', //文字区域背景色
      rotate: 0,
      borderRadius: 0
    }
  }
];

//得到当前默认信息
let newOptionArr = _.cloneDeep(optionArr);
newOptionArr[1].css.textStyle = newOptionArr[1].css.textStyle[0];
newOptionArr[1].css.textAlign = newOptionArr[1].css.textAlign[0];
newOptionArr[1].css.fontWeight = newOptionArr[1].css.fontWeight[0];
newOptionArr[1].css.textDecoration = newOptionArr[1].css.textDecoration[0];
newOptionArr[3].css.mode = newOptionArr[3].css.mode[0];
export { optionArr, newOptionArr };
