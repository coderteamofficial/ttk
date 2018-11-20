# TTK

Лендинг

## Структура

- assets/ - папка где хранятся все медиа файлы, стили и скрипты (стили и скрипты после сборки gulp)
- dev/ - папка для редактирования стилей и js
	- js/ - папка с js и vue
	- stylus/ - файлы стилей в stylus
- index.html - основной файл со всеми блоками
- en.html, tat.html и т.д. - дублируют основной index.html

## Особенности

- Структура файлов не содержит модули node_modules, что бы работала сборка gulp не обходимо выполнить соответствующие команды (с условием что на сервере стоят nodejs и yarn)
- Как уставноить модули, копи-паст в порядке очереди:
	1. `yarn init`
	2. `yarn add gulp`
	3. `yarn add gulp-stylus gulp-concat gulp-sourcemaps gulp-livereload gulp-uglify gulp-notify nib rupture del --save-dev`
	5. Можно собирать используя `gulp`