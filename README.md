## 如何更新内容
在`/app/page.tsx`中，修改对应位置内容，例如：

- 修改作者。直接修改变量`authors`，目前支持修改作者数量、作者姓名、排名以及个人主页链接。其中个人主页链接可以为空
- 修改Evaluation。直接修改`paperEvaluations`允许增加Eval数目，修改Eval文字和图片。比如想新增一部分，在变量`paperEvaluations`中新增一行`{text:"", imgUrl:"/path/to/image.png"}`，其中text为文字，imgUrl为图片链接，图片链接可以为空。

## 如何更新

修改代码后，把更新代码push到main分支。

**注意**：如果更改了repo名称，要在`/app/page.tsx`中修改`repoName`变量为新的repo名称