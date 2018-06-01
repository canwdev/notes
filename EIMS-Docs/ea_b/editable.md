# 可编辑区域

## 全局可编辑区域

```html
<!--ea_span_ename1|--><span name="_ename1|">全局可编辑区</span><!--ea_span_ename1|-->
```

## 可编辑区域

```html
<!--ea_span_ename01--><span name="_ename01">可编辑区</span><!--ea_span_ename01-->
```

```js
let count = 10;
for (let i=0;i<count;i++) {
    let str = `<!--ea_span_ename${i}--><span class="" name="_ename${i}">可编辑区</span><!--ea_span_ename${i}-->`
    console.log(str);
}
```