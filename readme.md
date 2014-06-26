jQuery-tinyDraggable
====================

An extremely lightweight jQuery plugin for rendering absolute positioned DOM objects draggable.

Usage is straightforward and - for the sake of simplicity and "tinyness" - only two options are available. The plugin was originally developed for adding draggability to jQuery Colorbox: https://github.com/jackmoore/colorbox.

## Homepage

How the plugin can be used in combination with Colorbox is explained in detail here:
http://pixabay.com/blog/posts/draggable-jquery-colorbox-52/

## Usage

1. Copy "jquery.tiny-draggable.js" to the corresponding asset directories in your project.

2. Include the JavsScript file in your HTML code; preferable towards the end of the page:

        <script src='jquery.tiny-draggable.js'></script>

   Remember to include jquery.tiny-draggable.js *after* loading jQuery itself.

3. Initialise tinyDraggable on absolute positioned DOM elements:

        <script>
            $(function() {
                $('#my_div').tinyDraggable();
            });
        </script>

## Options

    $(selector).tinyDraggable({ handle: 'handle selector', 'exclude': 'excluded items' });

* `handle`: jQuery selector for all elements serving as grab handle
* `exclude`: jQuery selector for elements that must not trigger the dragging event

## Changelog:

### Version 1.0.0-beta - 2014/06/26

* First release
