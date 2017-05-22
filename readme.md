SweetAlert Async
==========
針對[SweetAlert](http://t4t5.github.io/sweetalert/)的Promise支援擴充。

## 快速上手
### 引用
```html
<script src="sweetalert.min.js"></script>
<script src="sweetAlertAsync.js"></script>
<link rel="stylesheet" type="text/css" href="dist/sweetalert.css">
```

### 使用
```typescript
var result = await swalAsync({
	title: "Are you sure?",
	text: "You will not be able to recover this imaginary file!",
	type: "warning",
	showCancelButton: true,
	confirmButtonColor: "#DD6B55",
	confirmButtonText: "Yes, delete it!",
	closeOnConfirm: false
});
console.log(result);
```

```javascript
swalAsync({
	title: "Are you sure?",
	text: "You will not be able to recover this imaginary file!",
	type: "warning",
	showCancelButton: true,
	confirmButtonColor: "#DD6B55",
	confirmButtonText: "Yes, delete it!",
	closeOnConfirm: false
}).then(function(result){
	console.log(result);
});
```

## 授權
本專案採用MIT條款授權
