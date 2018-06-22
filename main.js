var keys = {
    '0': ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    '1': ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    '2': ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    'length': 3
}
var hash = {
    q: 'qq.com',
    w: 'weibo.com',
    e: 'ele.me',
    r: 'renren.com',
    t: 'taobao.com',
    y: 'youku.com',
    u: 'uc.com',
    i: 'iqiyi.com',
    o: 'opera.com',
    a: 'alipay.com',
    s: 'sohu.com',
    g: 'github.com',
    j: 'jd.com',
    z: 'zhihu.com',
    c: 'ctrip.com',
    b: 'baidu.com',
    m: 'mozilla.com'
}
// hashInlocalStorage = JSON.parse(getItem('lll') || 'null');
var hashInlocalStorage = getFromLocalStorage('lll')
if (hashInlocalStorage) {
    hash = hashInlocalStorage;
}
function getFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || 'null')
}
// 2.生成键盘
// function tag(tagName, attributes){
//     var element = document.createElement(tagName)

//     for(var key in attributes){ //key 为className,id,textContent
//         element[key] = attributes[key]
//     }
//     return element
// }

function tag(tagName) {
    return document.createElement(tagName)
}

function createSpan(textContent) {
    var span1 = tag('span');
    span1.textContent = row[index2];
    span1.className = 'text';
    return span1;
}
function createButton(id) {
    var button1 = tag('button');
    button1.textContent = '编辑';
    button1.id = id;
    button1.onclick = function (abc) {
        button2 = abc['target']
        // console.log(button2.previousSibling)
        var img2 = button2.previousSibling
        var key = button2['id']
        // console.log(abc['target']['id']);
        var x = prompt('请输入一个网址');
        hash[key] = x;
        img2.src = 'http://' + x + '/favicon.ico'
        img2.onerror = function (dlf) {
            dlf.target.src = 'images/icon.png'
        }
        localStorage.setItem('lll', JSON.stringify(hash));
        // console.log(hash);
    }
    return button1
}
function createImage(domain) {
    var img1 = tag('img')
    if (domain) {
        img1.src = 'http://' + domain + '/favicon.ico'
    } else {
        img1.src = 'images/icon.png'
    }
    img1.onerror = function (dlf) {
        // console.log('下载失败了')
        dlf.target.src = 'images/icon.png'
    }
    return img1
}

var index = 0;
while (index < keys.length) {
    var div1 = tag('div');
    div1.className = 'row'

    kbds.appendChild(div1);

    var row = keys[index];
    // console.log(row);
    var index2 = 0;
    while (index2 < row.length) {
        var span1 = createSpan(row[index2])

        var button1 = createButton((row)[index2])

        var img1 = createImage(hash[row[index2]])

        var kbd = tag('kbd');
        kbd.className = 'key';
        kbd.appendChild(span1);
        kbd.appendChild(button1);
        kbd.appendChild(img1);
        div1.appendChild(kbd);
        index2 = index2 + 1;
    } 
    index = index + 1;
}
// 3.监听键盘
document.onkeypress = function (abc) {
    // console.log('输入了一个键');
    // console.log('你按的是：');
    var key = abc['key'];
    var website = hash[key];
    console.log(website);
    // location.href = 'http://' + website;
    window.open('http://' + website, '_blank');

}