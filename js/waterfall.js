/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

  /**
     * 内容JSON
     */
  var demoContent = [
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
//    {
//      demo_link: '',
//      img_link: '',
//      code_link: '',
//      title: '',
//      core_tech: '',
//      description: ''
//    },
    {
      demo_link: 'http://blog.csdn.net/al4fun/article/details/53888990',
      img_link: 'http://img.blog.csdn.net/20161226202655700?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvYWw0ZnVu/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast',
      code_link: 'http://blog.csdn.net/al4fun/article/details/53888990',
      title: 'Android：NestedScrolling机制',
      core_tech: 'Android',
      description: '如今，NestedScrolling机制(可以称为嵌套滚动或嵌套滑动)在各种app中的应用已经十分广泛了'
    }
  ];

  contentInit(demoContent) //内容初始化
  waitImgsLoad() //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function contentInit(content) {
  // var htmlArr = [];
  // for (var i = 0; i < content.length; i++) {
  //     htmlArr.push('<div class="grid-item">')
  //     htmlArr.push('<a class="a-img" href="'+content[i].demo_link+'">')
  //     htmlArr.push('<img src="'+content[i].img_link+'">')
  //     htmlArr.push('</a>')
  //     htmlArr.push('<h3 class="demo-title">')
  //     htmlArr.push('<a href="'+content[i].demo_link+'">'+content[i].title+'</a>')
  //     htmlArr.push('</h3>')
  //     htmlArr.push('<p>主要技术：'+content[i].core_tech+'</p>')
  //     htmlArr.push('<p>'+content[i].description)
  //     htmlArr.push('<a href="'+content[i].code_link+'">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>')
  //     htmlArr.push('</p>')
  //     htmlArr.push('</div>')
  // }
  // var htmlStr = htmlArr.join('')
  var htmlStr = ''
  for (var i = 0; i < content.length; i++) {
    htmlStr += '<div class="grid-item">' + '   <a class="a-img" href="' + content[i].demo_link + '">' + '       <img src="' + content[i].img_link + '">' + '   </a>' + '   <h3 class="demo-title">' + '       <a href="' + content[i].demo_link + '">' + content[i].title + '</a>' + '   </h3>' + '   <p>主要技术：' + content[i].core_tech + '</p>' + '   <p>' + content[i].description + '       <a href="' + content[i].code_link + '">源代码 <i class="fa fa-code" aria-hidden="true"></i></a>' + '   </p>' + '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  //console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      //console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
        //console.log('onload' + count)
        if (count == totalImgs) {
          //console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    //console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector: '.grid-item',
    columnWidth: 250,
    isFitWidth: true,
    gutter: 20
  })
}