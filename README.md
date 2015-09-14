
## ���������� ������� � �������

��������������, ��� ***GIT*** � **_Node.js_** ��� ����������� �� ����� ������ ���������. ���� ���, �� ��������� � ��������� ���������.
��� ������� ���������� �������� � �������, �������� � �������� ����� �������.

��������� �� ������� ��������� ������� (*����� � ����� �����������*):
```
> git clone https://github.com/gitolog/ss-gulp-modules.git .
```
��� ���� � ������ ������� ����� ����������� ����� **_gulpfile.js_** � **_package.json_**,����������� ��� ���������� ���������. 

### 1. ������������� Gulp
```
> npm install -g gulp
```
���� **-g** ������� � ���, ��� ��������������� ��������. ���� Gulp ��� ����������, ���� ����� ����� ����������.

### 2. ������������� ����������� ������ Gulp

```
> npm install --save-dev
```

����� ����������� ������, ������������ � ����� **_package.json_**:

   * **gulp** - ���������� ��� �����������. ����� ���������� �������� � ������ (, ��� ����)
   * **del** - ������ Node.js ��� �������� ������ � �����
   * **gulp-autoprefixer** - CSS-�������������. ������������� ��������� ����������� ��������� �������� CSS ��������� ������ CanIUse.com
   * **gulp-concat** - ������ ��� ������� ������
   * **gulp-imagemin** - ������ ��� ����������� PNG, JPEG, GIF, SVG
   * **gulp-less** - ���������� CSS-������������� LESS
   * **gulp-load-plugins** - �������� ������������� �������� Gulp
   * **gulp-minify-css** - ������ ��� ����������� CSS
   * **gulp-minify-html** - ������ ��� ����������� HTML
   * **gulp-notify** - ������ ��� ������ ��������� � �������
   * **gulp-rename** - ������ ��� �������������� ������
   * **gulp-uglify** - ������ ��� ����������� JS-������
   * **run-sequence** - ������ ��������� ��������� ������ � ����� ������������������ ��� ����������, ��� � ���������

### 2. ������ ����� Gulp

����������� ������ ������� � ����� **_gulpfile.js_**

#### ������ ������� ���� CSS
```
> gulp compile:css
```
����� ����� ��� ����� LESS � CSS �� ����� **_/www/css/src_**, ��������������, ���������� � ���� ���� � �������� � **_/www/css/style.css_**.
����� ����� ������������ ������ ������ � **_/www/css/style.min.css_**

#### ������ ������ CSS
```
> gulp minify:css
```
��� ����� **_*.css_** � ����� **_/www/css_** ����� ����� � ��������� � ��� �� ����� ��� ������� **_*.min.css_**
��� ������ ����� �������������� �� �����.

#### ������ ������� ���� JS
```
> gulp compile:js
```
����� ����� ��� JS-����� �� ����� **_/www/javascript/src_**, ��������������, ���������� � ���� ���� � �������� � **_/www/javascript/common.js_**

#### ������ ������ JS
```
> gulp minify:js
```
���� **_common.js_** � ����� **_/www/javascript_** ����� ���� � �������� � ��� �� ����� ��� ������ **_common.min.js_**

#### ������ ������ IMAGES
```
> gulp minify:images
```
����� ����� ��� �������� (JPG, GIF, PNG) �� ����� **_/www/images/src_**, �������������� � �������� � **_/www/images_**

#### ������ � ������ ����� �����
```
> gulp build
```
���������� � ������ CSS, JS � ����������� � ��������������� ��������� ���������� ������.

#### �������� �� �����������
```
> gulp
```
����� ������� ���������� ������, ���������� ����� ���������� ������, �������� � ��������.
��� �������� ��������� � ����� ��� ������� ����� ����������� �� ���������� "�� ����".

�����, ��� ����� ���������� ��������, ������ ��� �������� **_*.ftl_**, ����� ����������� ����-���������� ���� ��������.

##### Live reload ���� ��������
��� ��������������� ���������� ���� �������� �� ����� �������������� ��������, ������ � �������� ���������� ���������� ������ LiveReload:

[������ ��� Google Chrome] (https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

[������ ��� Mozilla Firefox] (https://github.com/downloads/siasia/livereload-extensions/LiveReload-2.0.9.xpi)