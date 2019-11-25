$('#file').change(function () {
    alert(1);
    var input = $(this)[0];
    if (input.files && input.files[0]) {
        if (input.files[0].type.match('image.png')) {
            alert(2);
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        } else {
            alert('ошибка, не изображение');
        }
    } else {
        alert('хьюстон у нас проблема');
    }
});