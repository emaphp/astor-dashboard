# astor-dashboard
A responsive dashboard made with Sass

<br>
###About

<br>
Astor Dashboard is a Bootstrap-based dashboard made with [Sass](http://sass-lang.com ""). It was originally based on [Dashgum](http://www.blacktie.co/demo/dashgumfree/ ""), made by [BlackTie](http://www.blacktie.co/ ""). Astor Dashboard is focused on providing a starting design for applications made with [Laravel](http://laravel.com "").

<br>
![Login](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQWHpMQnZOOW4tdHM "")

![Dashboard](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQNWQwQjNjRkZ0ZjQ "")

![Interface](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQQ3lueTFlTWJjcU0 "")

![Datatables](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQT3c0Z3ZwVUVEbzA "")

![Components](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQd1FGVXZBWmwyU2s "")


<br>
###Installation

<br>
```
bower install astor-dashboard
```

<br>
###Dependencies

<br>
 * [jQuery](http://jquery.com/ "")
 * [Bootstrap 3.3](http://getbootstrap.com/ "")
 * [Font-Awesome 4.4](http://fortawesome.github.io/Font-Awesome/ "")

<br>
### Additional plugins

<br>
 * [jquery.scrollTo](https://github.com/flesler/jquery.scrollTo "")
 * [jquery.bandoneon](https://github.com/emaphp/jquery.bandoneon "")
 * [DataTables](https://github.com/DataTables/DataTables "")
 * [Select2](https://github.com/select2/select2 "")
 * [bootstrap-checkbox](https://github.com/vsn4ik/bootstrap-checkbox "")
 * [bootstrap-datetimepicker](https://github.com/Eonasdan/bootstrap-datetimepicker "")
 * [bootstrap-slider](https://github.com/seiyria/bootstrap-slider "")
 * [typeahead.js](http://twitter.github.io/typeahead.js/ "")
 * [bootstrap3-typeahead](https://github.com/bassjobsen/Bootstrap-3-Typeahead "")
 * [dragula](https://github.com/bevacqua/dragula "")

<br>
###Customization

<br>
In order to generate a customized CSS you'll need to install some additional dependencies using **npm**.

<br>
```
sudo npm install
```

<br>
Astor Dashboard uses **gulp** to convert its Sass files to CSS. You can build the project by simply putting

<br>
```
gulp
```

<br>
Sass files are located in the *dist/sass/* folder. The project uses its own files for building Select2, bootstrap-datetimepicker, bootstrap-slider and DataTables. Configuration values are located in *dist/sass/dashboard/_variables.scss*.

<br>
###License

<br>
Licensed under the MIT License. Enjoy!