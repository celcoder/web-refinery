app.factory('GalleryFactory', function() {
    var $gallery;

    $('#skeleton').on('load', function () {
        $gallery = $('#skeleton').contents().find('#gallery');

    });
    var newGalleryRow = `<div class = 'row'>
    <div class = 'col-md-4'><h3 class='text-center'>Title</h3></div>
    <div class = 'col-md-4'><h3 class='text-center'>Title</h3></div>
    <div class = 'col-md-4'><h3 class='text-center'>Title</h3></div>
    </div>`;

    return {
        removeLastRow: function(){

         $gallery = $('#skeleton').contents().find('#gallery');


         if($gallery.children().length > 1)
            $gallery.children().last().remove();
    },
    newGalleryRow: newGalleryRow
}
})