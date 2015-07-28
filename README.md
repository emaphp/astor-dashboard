# astor-dashmin
A responsive dashboard made with Sass

<br>
###About

<br>
Astor Dashboard is a Bootstrap-based dashboard made with [Sass](htt://sass-lang.com ""). It was originally based in [Dashgum](http://www.blacktie.co/demo/dashgumfree/ ""), made by [BlackTie](http://www.blacktie.co/ "").

<br>
![Dashboard](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQdXpvcGtmTWZyREE "")

![Datatables](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQbjJ4Y0hQbjhrQkE "")

![Interface](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQNncwRi03cEN4VTg "")

![Login](http://drive.google.com/uc?export=view&id=0B3PWnBYHw7RQZjZJMHJ2LUJ4RVk "")


<br>
###Installation

<br>
```
bower install astor-dashboard
```

<br>
###Dependencies

<br>
 * jQuery
 * Bootstrap 3.4
 * Font-Awesome 4.3

<br>
### Additional plugins

<br>
 * jquery.scrollTo
 * jquery.bandoneon
 * Datatables
 * Select2
 * boostrap-checkbox

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
Sass files are located in the *dist/sass/* folder. The file *dashboard-build.scss* builds the dashboard while *datatables-build.scss* builds the Datatables styles. Configuration values are located in *dist/sass/dashboard/_variables.scss*.

<br>
###License

<br>
Licensed under the MIT License. Enjoy!