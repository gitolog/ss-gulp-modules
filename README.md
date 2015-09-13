
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

   * gulp - ���������� ��� �����������. ����� ���������� �������� � ������ (, ��� ����)

   * del - ������ Node.js ��� �������� ������ � �����

   * gulp-autoprefixer - CSS-�������������. ������������� ��������� ����������� ��������� �������� CSS ��������� ������ CanIUse.com

   * gulp-concat - ������ ��� ������� ������

   * gulp-imagemin - ������ ��� ����������� PNG, JPEG, GIF, SVG

   * gulp-less - ���������� CSS-������������� LESS

   * gulp-minify-css - ������ ��� ����������� CSS

   * gulp-minify-html - ������ ��� ����������� HTML

   * gulp-notify - ������ ��� ������ ��������� � �������

   * gulp-rename - ������ ��� �������������� ������

   * gulp-uglify - ������ ��� ����������� JS-������

### 2. ������ ����� Gulp

����������� ������ ������� � ����� **_gulpfile.js_**

#### ������ ���� CSS
```
> gulp styles
```
����� ����� ��� ����� LESS � CSS �� ����� **_/www/css/src_**, ��������������, ���������� � ���� ���� � �������� � **_/www/css/style.css_**.
����� ����� ������������ ������ ������ � **_/www/css/style.min.css_**

#### ������ JavaScript
```
> gulp scripts
```
����� ����� ��� JS-����� �� ����� **_/www/javascript/src_**, ��������������, ���������� � ���� ���� � �������� � **_/www/javascript/common.js_**.
����� ����� ������������ ������ ������ � **_/www/javascript/common.min.js_**

#### ������ ��������
```
> gulp images
```
����� ����� ��� �������� (JPG, GIF, PNG) �� ����� **_/www/images/src_**, �������������� � �������� � **_/www/images_**.

#### ������ ����� �����
```
> gulp build
```
���������� CSS, JS � �������� � ��������������� ��������� ���������� ������

#### �������� ������
```
> gulp
```
����� ������� ���������� ������ (CSS � JS), ���������� ����� ���������� ������, �������� � ��������.
��� �������� ��������� � ����� ��� ������� ����� ����������� �� ���������� "�� ����".